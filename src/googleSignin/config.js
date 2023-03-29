import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBy7G97gUdA_GU6GlUNh1NnCDtZsLgdF3Q",
  authDomain: "auth5-b875b.firebaseapp.com",
  projectId: "auth5-b875b",
  storageBucket: "auth5-b875b.appspot.com",
  messagingSenderId: "56952443500",
  appId: "1:56952443500:web:4cc2bccc164b2c53bb7e49",
  measurementId: "G-69T8H7LMWN",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
