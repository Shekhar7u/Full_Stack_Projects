// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBHH38ptiwJ20iT_Ndk_mIEtpE7UK4sXz4",
    authDomain: "clone-bad52.firebaseapp.com",
    projectId: "clone-bad52",
    storageBucket: "clone-bad52.appspot.com",
    messagingSenderId: "1099078282479",
    appId: "1:1099078282479:web:c743c9ea510fef18f27f1a",
    measurementId: "G-KDP745Z77X"
};
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth,db, signInWithEmailAndPassword, createUserWithEmailAndPassword}