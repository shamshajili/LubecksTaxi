// ===== Admin Auth Middleware (JWT) =====
function adminAuth(req, res, next) {
  const token = req.headers["x-admin-token"];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.ADMIN_JWT_SECRET);
    if (!decoded.admin) return res.status(401).json({ error: "Unauthorized" });
    next();
  } catch {
    return res.status(401).json({ error: "Unauthorized" });
  }
}
// 3) BAN CHECK 
async function isBannedUser(email, ip) {
  const bannedRef = db.collection("banned");

  if (email) {
    const emailSnap = await bannedRef.where("email", "==", email).limit(1).get();
    if (!emailSnap.empty) return true;
  }

  if (ip) {
    const ipSnap = await bannedRef.where("ip", "==", ip).limit(1).get();
    if (!ipSnap.empty) return true;
  }

  return false;
}


const express = require("express");
const cors = require("cors");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();

let fetch;
try {
  fetch = require("node-fetch"); // node-fetch v2
} catch {
  fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args)); // v3 fallback
}

const admin = require("firebase-admin");
require("dotenv").config();

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_ADMIN)
    ),
  });
}

const db = admin.firestore();
const badWords = [
  // EN
  "fuck", "shit", "bitch", "asshole", "idiot",
  // TR/AZ
  "orospu", "yarak", "sik", "göt", "amcıq", "amciq",
  // RU
  "сука", "блять", "дурак",
  // DE (Wichtig!)
  "arsch",
  "arschloch",
  "fotze",
  "fick",
  "ficken",
  "scheiße",
  "scheisse",
  "hurensohn",
  "wichser",
  "penner",
  "verpiss dich",
  "schlampe",
  "hure",
  "drecksau",
  "missgeburt",
  "spast",
  "spasti",
  "behindert",
  "pisser",
  "miststück",
  "arschgeige"
];

function containsBadWords(text) {
  if (!text) return false;
  const lowered = text.toLowerCase();
  return badWords.some((w) => lowered.includes(w));
}

// 2) SPAM PROTECTION (eine Bewertung pro 24h)
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

// ===== Express setup =====
const app = express();


app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://lubecks-taxi.web.app",
      "https://lubecks-taxi.firebaseapp.com",
    ],
  })
);
app.use(express.json());


// ===== Admin Login =====
app.post("/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email !== process.env.ADMIN_EMAIL) {
      return res.status(401).json({ error: "Ungültige Zugangsdaten." });
    }

    const ok = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH);
    if (!ok) {
      return res.status(401).json({ error: "Ungültige Zugangsdaten." });
    }

    const token = jwt.sign(
      { admin: true, email },
      process.env.ADMIN_JWT_SECRET,
      { expiresIn: "12h" }
    );

    return res.json({ token });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Serverfehler beim Login." });
  }
});
// ===== Review endpoint =====
app.post("/review", async (req, res) => {
  try {
    const { name, email, rating, comment, token } = req.body;

    const ip =
      (req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
      req.socket.remoteAddress;

    if (!token) {
      return res.status(400).json({ error: "reCAPTCHA-Token fehlt." });
    }

    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
      return res
        .status(500)
        .json({ error: "reCAPTCHA-Secret fehlt im Backend." });
    }

    // === reCAPTCHA VALIDATION ===
    const verifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secret}&response=${token}`,
      }
    );

    const verifyData = await verifyRes.json();
    console.log("RECAPTCHA RESPONSE:", verifyData);

    if (!verifyData.success || (verifyData.score && verifyData.score < 0.5)) {
      return res
        .status(400)
        .json({ error: "reCAPTCHA-Überprüfung fehlgeschlagen." });
    }

    // === Bad word check ===
    if (containsBadWords(comment)) {
      return res.status(400).json({
        error: "Ihr Kommentar enthält unzulässige oder beleidigende Wörter.",
      });
    }

    // === BAN CHECK  ===
    if (await isBannedUser(email?.trim(), ip)) {
      return res.status(403).json({
        error: "Sie wurden gesperrt und können keine Bewertungen mehr abgeben.",
      });
    }

    // === Spam limit check ===
    if (await isSpamReview(email?.trim())) {
      return res.status(429).json({
        error: "Sie können nur eine Bewertung alle 24 Stunden abgeben.",
      });
    }

    // === Save to Firestore ===
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

// ===== Start server =====
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Backend läuft auf http://localhost:${PORT}`);
});


// ===== Admin: Delete Review =====
app.delete("/admin/review/:id", adminAuth, async (req, res) => {
  try {
    const id = req.params.id;
    await db.collection("reviews").doc(id).delete();
    return res.json({ ok: true, id });
  } catch (err) {
    return res.status(500).json({ error: "Fehler beim Löschen." });
  }
});

// ===== Admin: Ban User =====
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
// ===== Admin: Unban =====
app.delete("/admin/unban/:id", adminAuth, async (req, res) => {
  try {
    await db.collection("banned").doc(req.params.id).delete();
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Fehler beim Entsperren." });
  }
});
// ===== Admin: Fetch Banned Users =====
app.get("/admin/banned", adminAuth, async (req, res) => {
  try {
    const snap = await db.collection("banned").orderBy("createdAt", "desc").get();
    const list = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: "Fehler beim Laden der gesperrten Benutzer." });
  }
});

// ===== Admin: Fetch ALL Reviews =====
app.get("/admin/reviews", adminAuth, async (req, res) => {
  try {
    const snap = await db.collection("reviews").orderBy("createdAt", "desc").get();
    const list = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: "Fehler beim Laden der Bewertungen." });
  }
});

