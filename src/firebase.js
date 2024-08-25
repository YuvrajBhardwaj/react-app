// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4HWficTdwjlYpSDZSLxAagMAZUGiV_9M",
  authDomain: "new-app-1eca2.firebaseapp.com",
  projectId: "new-app-1eca2",
  storageBucket: "new-app-1eca2.appspot.com",
  messagingSenderId: "134085967335",
  appId: "1:134085967335:web:57a5dd6cae4f08bcbd5142",
  databaseURL: "https://new-app-1eca2-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export { app, auth, provider, database };
