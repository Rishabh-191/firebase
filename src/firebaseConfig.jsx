// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzd-hlQN74WHoxPcGEZEWPPwufzh5Z2ic",
  authDomain: "quizapp-af120.firebaseapp.com",
  projectId: "quizapp-af120",
  storageBucket: "quizapp-af120.appspot.com",
  messagingSenderId: "878266600872",
  appId: "1:878266600872:web:7a06a1eaaf4c324a6da19d",
  measurementId: "G-MD011B30HJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);