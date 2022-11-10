import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA83HX3C52jvBIULlStfDizbBthUz-PXCQ",
  authDomain: "chatapp-a9325.firebaseapp.com",
  projectId: "chatapp-a9325",
  storageBucket: "chatapp-a9325.appspot.com",
  messagingSenderId: "507153053280",
  appId: "1:507153053280:web:391db30d957aae5e277505",
};

// const db = firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

export default db;
