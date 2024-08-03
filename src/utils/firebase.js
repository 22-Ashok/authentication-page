import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAc_kE5wPrl2y50sCbcqPZMmKZSjVWjKOk",
  authDomain: "authentication-e4d1a.firebaseapp.com",
  projectId: "authentication-e4d1a",
  storageBucket: "authentication-e4d1a.appspot.com",
  messagingSenderId: "138241898683",
  appId: "1:138241898683:web:2daff523437790f8cc919e"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();
