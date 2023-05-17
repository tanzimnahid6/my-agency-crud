// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt-rvV80OROKxmFYx0ZBK0TPpmzGwYe9s",
  authDomain: "full-stack-agency.firebaseapp.com",
  projectId: "full-stack-agency",
  storageBucket: "full-stack-agency.appspot.com",
  messagingSenderId: "326448015850",
  appId: "1:326448015850:web:ec12a9a7a28393d1692a93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app