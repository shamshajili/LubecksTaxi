import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxX3lG6PabgfDXcsaLejbNQQKgOi5qgPM",
  authDomain: "lubecks-taxi.firebaseapp.com",
  projectId: "lubecks-taxi",
  storageBucket: "lubecks-taxi.appspot.com",
  messagingSenderId: "953660936436",
  appId: "1:953660936436:web:9b1ca1a4d3fe59a9a94ea1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
