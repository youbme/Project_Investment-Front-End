// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import getAuth from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABlvPANGUBlpatEbZRcWcKrfm4PqJiLdQ",
  authDomain: "emailpasswordlogin-49836.firebaseapp.com",
  projectId: "emailpasswordlogin-49836",
  storageBucket: "emailpasswordlogin-49836.appspot.com",
  messagingSenderId: "105093476316",
  appId: "1:105093476316:web:1fe65d1e8aab9bee85e919",
  measurementId: "G-HVHSXWK8DZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

