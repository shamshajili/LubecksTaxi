const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

require("dotenv").config();

// ==== Firebase Init ====
if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();
const app = express();


const allowedOrigins = [
  "http://localhost:3000",
  "https://lubecks-taxi-dybx.vercel.app",
  "https://lubecks-taxi-dybx-git-main-shams-hajilis-projects.vercel.app"
];

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (origin && (allowedOrigins.includes(origin) || origin.endsWith(".vercel.app"))) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-admin-token");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  next();
});

app.use(express.json());

// ===== BAD WORD LIST =====
const badWords = [
  "fuck","shit","bitch","asshole","idiot",
  "orospu","yarak","sik","göt","amcıq","amciq",
  "сука","блять","дурак",
  "arsch","arschloch","fotze","fick","ficken","scheiße","scheisse",
  "hurensohn","wichser","penner","verpiss dich","schlampe","hure",
  "drecksau","missgeburt","spast","spasti","behindert","pisser",
  "miststück","arschgeige"
];

function containsBadWords(text) {
  if (!text) return false;
  const lowered = text.toLowerCase();
  return badWords.some((w) => lowered.includes(w));
}

// ===== BAN CHECK =====
async function isBannedUser(email, ip) {
  const bannedRef = db.collection("banned");

  if (email) {
    const snap = await bannedRef.where("email", "==", email).limit(1).get();
    if (!snap.empty) return true;
  }

  if (ip) {
    const snap = await bannedRef.where("ip", "==", ip).limit(1).get();
    if (!snap.empty) return true;
  }

  return false;
}

// ===== SPAM CHECK =====
async function isSpamReview(email) {
  if (!email) return false;

  const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;

  const snapshot = await db
    .collection("reviews")
    .where("email", "==", email)
    .get();

  const recent = snapshot.docs.find((doc) => {
    const d = doc.data();
    return d.createdAt?.toMillis() > oneDayAgo;
  });

  return !!recent;
}

// ===== ADMIN AUTH (JWT) =====
function adminAuth(req, res, next) {
  const token = req.headers["x-admin-token"];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const adminJwtSecret = functions.config().admin.jwt_secret;
    const decoded = jwt.verify(token, adminJwtSecret);

    if (!decoded.admin) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    next();
  } catch (err) {
    return res.status(401).json({ error: "Unauthorized" });
  }
}


// ======================================================
// =================== API ENDPOINTS =====================
// ======================================================

// ===== ADMIN LOGIN =====
app.post("/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;

   const adminEmail = functions.config().admin.email;
const adminHash = functions.config().admin.password_hash;
const adminJwtSecret = functions.config().admin.jwt_secret;

if (email !== adminEmail) {
  return res.status(401).json({ error: "Ungültige Zugangsdaten." });
}

const ok = await bcrypt.compare(password, adminHash);
if (!ok) {
  return res.status(401).json({ error: "Ungültige Zugangsdaten." });
}

const token = jwt.sign(
  { admin: true, email },
  adminJwtSecret,
  { expiresIn: "12h" }
);

    return res.json({ token });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Serverfehler beim Login." });
  }
});

// ===== ADD REVIEW =====
app.post("/review", async (req, res) => {
  try {
    const { name, email, rating, comment, token } = req.body;

    const ip =
      (req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
      req.socket.remoteAddress;

    if (!token)
      return res.status(400).json({ error: "reCAPTCHA-Token fehlt." });

    // === reCAPTCHA VERIFY ===
    const secret = functions.config().recaptcha.secret;

    const verifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secret}&response=${token}`,
      }
    );

    const verifyData = await verifyRes.json();

    if (!verifyData.success || (verifyData.score && verifyData.score < 0.5)) {
      return res.status(400).json({
        error: "reCAPTCHA-Überprüfung fehlgeschlagen.",
      });
    }

    // === bad words ===
    if (containsBadWords(comment)) {
      return res.status(400).json({
        error: "Ihr Kommentar enthält unzulässige oder beleidigende Wörter.",
      });
    }

    // === banned check ===
    if (await isBannedUser(email?.trim(), ip)) {
      return res.status(403).json({
        error: "Sie wurden gesperrt und können keine Bewertungen mehr abgeben.",
      });
    }

    // === spam check ===
    if (await isSpamReview(email?.trim())) {
      return res.status(429).json({
        error: "Sie können nur eine Bewertung alle 24 Stunden abgeben.",
      });
    }

    await db.collection("reviews").add({
      name: name || "Gast",
      email: email || null,
      rating: Number(rating || 0),
      comment: comment || "",
      ip,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error("Review Save Error:", err);
    return res
      .status(500)
      .json({ error: "Serverfehler beim Speichern der Bewertung." });
  }
});

// ===== DELETE REVIEW =====
app.delete("/admin/review/:id", adminAuth, async (req, res) => {
  try {
    await db.collection("reviews").doc(req.params.id).delete();
    return res.json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Fehler beim Löschen." });
  }
});

// ===== BAN USER =====
app.post("/admin/ban", adminAuth, async (req, res) => {
  try {
    const { email, ip } = req.body;

    await db.collection("banned").add({
      email: email || null,
      ip: ip || null,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return res.json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Fehler beim Sperren." });
  }
});

// ===== UNBAN =====
app.delete("/admin/unban/:id", adminAuth, async (req, res) => {
  try {
    await db.collection("banned").doc(req.params.id).delete();
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Fehler beim Entsperren." });
  }
});

// ===== GET BANNED USERS =====
app.get("/admin/banned", adminAuth, async (req, res) => {
  try {
    const snap = await db
      .collection("banned")
      .orderBy("createdAt", "desc")
      .get();

    const list = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.json(list);
  } catch (err) {
    res.status(500).json({ error: "Fehler beim Laden der gesperrten Benutzer." });
  }
});

// ===== GET ALL REVIEWS =====
app.get("/admin/reviews", adminAuth, async (req, res) => {
  try {
    const snap = await db
      .collection("reviews")
      .orderBy("createdAt", "desc")
      .get();

    const list = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.json(list);
  } catch (err) {
    res.status(500).json({ error: "Fehler beim Laden der Bewertungen." });
  }
});

// EXPORT FIREBASE API
exports.api = functions.https.onRequest(app);
