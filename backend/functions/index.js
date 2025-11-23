const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

admin.initializeApp();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// ✅ BURADA öz server.js routes-larını köçür
// Məsələn:
app.get("/review", async (req, res) => {
  try {
    const snap = await admin.firestore().collection("reviews").orderBy("createdAt", "desc").get();
    const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post("/review", async (req, res) => {
  try {
    const { name, email, rating, comment } = req.body;
    await admin.firestore().collection("reviews").add({
      name,
      email,
      rating,
      comment,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ✅ app-i Firebase function kimi export edirik
exports.api = functions.https.onRequest(app);
