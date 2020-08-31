import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCJA1TuX52c0JEPTRGq0ylWplJrUvnPdYg",
    authDomain: "whats-up-clone-e75a3.firebaseapp.com",
    databaseURL: "https://whats-up-clone-e75a3.firebaseio.com",
    projectId: "whats-up-clone-e75a3",
    storageBucket: "whats-up-clone-e75a3.appspot.com",
    messagingSenderId: "674065427800",
    appId: "1:674065427800:web:736811f834c5652976892d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {
    auth,
    provider
};
export default db;
