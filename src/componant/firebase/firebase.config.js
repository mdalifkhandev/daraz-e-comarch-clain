// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhxAZrtMeF4a5vVWdyHljdaHrFzj4-1yU",
  authDomain: "daraz-e-comarch.firebaseapp.com",
  projectId: "daraz-e-comarch",
  storageBucket: "daraz-e-comarch.appspot.com",
  messagingSenderId: "599015040473",
  appId: "1:599015040473:web:2f569d699f15af2e6fe5c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app