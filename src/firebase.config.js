// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import {} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getPerformance } from "firebase/performance";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzBH8ZYp4nU9zmq8wyRUsg6WdThLihRaE",
  authDomain: "nexfin-6b44a.firebaseapp.com",
  databaseURL: "https://nexfin-6b44a-default-rtdb.firebaseio.com",
  projectId: "nexfin-6b44a",
  storageBucket: "nexfin-6b44a.appspot.com",
  messagingSenderId: "685996550789",
  appId: "1:685996550789:web:423617be32a3e82ada17ec",
  measurementId: "G-F450V3XZQ0",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
const perf = getPerformance(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getDatabase(app);
// const app = initializeApp(firebaseConfig);
