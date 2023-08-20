// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn54Zp9V24Bll3_WQTq6XSdl_ske2HmV0",
  authDomain: "blogproject-762c0.firebaseapp.com",
  projectId: "blogproject-762c0",
  storageBucket: "blogproject-762c0.appspot.com",
  messagingSenderId: "760864691393",
  appId: "1:760864691393:web:b0e706dd411c31efaab040",
  measurementId: "G-JXLNVBT7EV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

