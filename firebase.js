// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbh0Hsv9jeoOfV7bRN0Ck1SnvgrPQjvt4",
  authDomain: "react-native-todo-app-28fb0.firebaseapp.com",
  projectId: "react-native-todo-app-28fb0",
  storageBucket: "react-native-todo-app-28fb0.appspot.com",
  messagingSenderId: "105581918302",
  appId: "1:105581918302:web:91bb49e3bf1bc796da9ccf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;