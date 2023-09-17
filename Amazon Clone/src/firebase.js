// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
const firebaseApp = initializeApp({
    apiKey: "AIzaSyBHH38ptiwJ20iT_Ndk_mIEtpE7UK4sXz4",
    authDomain: "clone-e95b5.firebaseapp.com",
    projectId: "clone-e95b5",
    storageBucket: "clone-e95b5.appspot.com",
    messagingSenderId: "500401010661",
    appId: "1:500401010661:web:92e9326ba03f482c35610c",
    measurementId: "G-YP1L83NK78"
});
const auth = getAuth()


export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword }