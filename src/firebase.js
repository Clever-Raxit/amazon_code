import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvn8ko5p7XpD8xcqTO_5sZBK6E_yJPfnE",
  authDomain: "clone-595ba.firebaseapp.com",
  databaseURL: "https://clone-595ba.firebaseio.com",
  projectId: "clone-595ba",
  storageBucket: "clone-595ba.appspot.com",
  messagingSenderId: "250568204529",
  appId: "1:250568204529:web:49837c3fd90dd9d343c950",
  measurementId: "G-MCVJB4Y6BT",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { auth };
export default db;
