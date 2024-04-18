// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR31BEynHIq0z7le5SeyhF7DDNiiOc-mc",
  authDomain: "bnine--auth.firebaseapp.com",
  projectId: "bnine--auth",
  storageBucket: "bnine--auth.appspot.com",
  messagingSenderId: "79424387033",
  appId: "1:79424387033:web:d3060fd5e444dc75fd0bc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)