// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmdYVg3L0kuNPcV9Nx0IOHbJ1thGCgSm0",
  authDomain: "dragon-news-app-dbae0.firebaseapp.com",
  projectId: "dragon-news-app-dbae0",
  storageBucket: "dragon-news-app-dbae0.firebasestorage.app",
  messagingSenderId: "772207935418",
  appId: "1:772207935418:web:420a45cf5525a34f27a783"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;