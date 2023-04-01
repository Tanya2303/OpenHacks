import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBfQVM4yqFFl0t9PDA-qtzs8iutqWHTYA",
  authDomain: "projectlift-54abf.firebaseapp.com",
  projectId: "projectlift-54abf",
  storageBucket: "projectlift-54abf.appspot.com",
  messagingSenderId: "250723117417",
  appId: "1:250723117417:web:cb716a693b7e8e0f7835f8",
  measurementId: "G-QHYJ65KJFQ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GithubAuthProvider();

export {auth, provider}