import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDBaSf3dzqEPt_N2gSQHQnDgHB3XGO60CE",
  authDomain: "imfur-oficial.firebaseapp.com",
  projectId: "imfur-oficial",
  storageBucket: "imfur-oficial.appspot.com",
  messagingSenderId: "172459009192",
  appId: "1:172459009192:web:807a7aa7aeec8001174e9d",
  measurementId: "G-2EPFTWJYKB"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
