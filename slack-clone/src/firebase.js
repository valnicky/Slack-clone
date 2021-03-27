import firebase from "firebase"; // For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyA36LZnLI4M18V_yIGnDARzEhdDgon5t4c",
    authDomain: "slack-clone-4f051.firebaseapp.com",
    projectId: "slack-clone-4f051",
    storageBucket: "slack-clone-4f051.appspot.com",
    messagingSenderId: "701544989540",
    appId: "1:701544989540:web:5f8efc06c3214397f6f071",
    measurementId: "G-MH84SVYVP6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;