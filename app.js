// ----------------------------
// 1️⃣ Import required modules
const express = require("express");
const app = express();
const ejs = require("ejs");
const ejsMate = require("ejs-mate");
const path = require("path");
// const admin = require("firebase-admin");

const port = 8080;

// ----------------------------
// 3️⃣ Firebase Firestore Setup
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
//const serviceAccount = require("./firebase-key.json"); // Update this path
const serviceAccount = JSON.parse(process.env.FIREBASE_CREDENTIALS); // Update this path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

db.collection("test")
  .get()
  .then(() => {
    console.log("🔥 Firestore connected successfully!");
  })
  .catch((err) => {
    console.error("❌ Firestore connection error:", err);
  });

// ----------------------------
// 4️⃣ Express App Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

// ----------------------------
// 5️⃣ Home Route - Fetch Songs from Firestore
app.get("/", async (req, res) => {
  try {
    // Fetch Songs
    const songsSnapshot = await db.collection("songs").get();
    const songs = songsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Fetch Remixes
    const remixesSnapshot = await db.collection("remix").get();
    const remix = remixesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Send both to the EJS template

    res.render("page/home.ejs", { songs, remix });
  } catch (error) {
    console.error("❌ Error fetching songs:", error);
    res.status(500).send("Error fetching songs");
  }
});

// ----------------------------
// 6️⃣ Start Server AFTER DB is connected
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
