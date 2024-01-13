// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// import {} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9bqleuMdtOI65VEQjxWTjbCDk-mQ0xHc",
  authDomain: "bazarapp-a1e1b.firebaseapp.com",
  projectId: "bazarapp-a1e1b",
  storageBucket: "bazarapp-a1e1b.appspot.com",
  messagingSenderId: "1037251876019",
  appId: "1:1037251876019:web:94753b8bee08449ac4ccc6"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const app = initializeApp(firebaseConfig);