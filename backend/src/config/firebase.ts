import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

const serviceAccount = require(process.env.FIREBASE_KEY_PATH || "./firebase-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.FIREBASE_BUCKET,
});

export const bucket = admin.storage().bucket();
