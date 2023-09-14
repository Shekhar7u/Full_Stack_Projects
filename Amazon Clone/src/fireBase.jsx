// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDSLDLC8AZ7acGGqcS-Vyvz41bm4FP5_zM",
  authDomain: "clone-e95b5.firebaseapp.com",
  projectId: "clone-e95b5",
  storageBucket: "clone-e95b5.appspot.com",
  messagingSenderId: "500401010661",
  appId: "1:500401010661:web:92e9326ba03f482c35610c",
  measurementId: "G-YP1L83NK78",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
