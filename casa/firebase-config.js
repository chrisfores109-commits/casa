// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKr7xK1T5S_vHvvWjKCwawuusS1oXJbTM",
  authDomain: "casa-limpia-21fd2.firebaseapp.com",
  databaseURL: "https://casa-limpia-21fd2-default-rtdb.firebaseio.com",
  projectId: "casa-limpia-21fd2",
  storageBucket: "casa-limpia-21fd2.firebasestorage.app",
  messagingSenderId: "376743150807",
  appId: "1:376743150807:web:32f0e47c26432910a2dc92",
  measurementId: "G-YKSEQF7LLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);