import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBQHUdVBfqydDcAzjdVMv7J2rNiH3SASws",
  authDomain: "netflix-cd7f4.firebaseapp.com",
  projectId: "netflix-cd7f4",
  storageBucket: "netflix-cd7f4.appspot.com",
  messagingSenderId: "143030513763",
  appId: "1:143030513763:web:3ae69c85985351302bc856",
  measurementId: "G-550BVG8D08",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
