import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAloJF4xhj7XervylvfQNsb7iQm68lyjqQ",
  authDomain: "projeto-react-a8d46.firebaseapp.com",
  projectId: "projeto-react-a8d46",
  storageBucket: "projeto-react-a8d46.appspot.com",
  messagingSenderId: "25661965579",
  appId: "1:25661965579:web:2ab864005ad8d0d2558e0e",
  measurementId: "G-F4CZSHVZC9"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
