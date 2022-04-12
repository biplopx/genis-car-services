// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl_SQDJo_VfsfN_QF56hLu7qO9daXv9XQ",
  authDomain: "genius-car-services-c730a.firebaseapp.com",
  projectId: "genius-car-services-c730a",
  storageBucket: "genius-car-services-c730a.appspot.com",
  messagingSenderId: "508741039406",
  appId: "1:508741039406:web:9f8fe9d382292df1bdf6bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;