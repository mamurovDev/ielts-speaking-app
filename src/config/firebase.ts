import { getDocs, collection, doc } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { Anybody } from "next/font/google";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwJJINmA5k4f_k1B9oY--nldbWijna79w",
  authDomain: "ielts-speaking-app-8c36c.firebaseapp.com",
  projectId: "ielts-speaking-app-8c36c",
  storageBucket: "ielts-speaking-app-8c36c.appspot.com",
  messagingSenderId: "505105059771",
  appId: "1:505105059771:web:4a7a28b9b57c3798827e9e",
  measurementId: "G-PQTWTGTK2M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);
const part1 = collection(db, "sub-questions");
export const get = async (arg: string) => {
  try {
    const q: any = await getDocs(collection(db, arg));
    q.forEach((element: any) => {
      console.log(element.data());
    });
  } catch (error) {
    console.log(error);
  }
};
