// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBHH38ptiwJ20iT_Ndk_mIEtpE7UK4sXz4",
    authDomain: "clone-e95b5.firebaseapp.com",
    projectId: "clone-bad52",
    storageBucket: "clone-e95b5.appspot.com",
    messagingSenderId: "500401010661",
    appId: "1:500401010661:web:92e9326ba03f482c35610c",
    measurementId: "G-YP1L83NK78"
};
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth,db, signInWithEmailAndPassword, createUserWithEmailAndPassword}