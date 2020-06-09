import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'

/*
const config = {
    apiKey: process.env.REACT_YOUR_API_KEY,
    authDomain: process.env.REACT_YOUR_AUTH_DOMAIN,
    databaseURL: process.env.REACT_YOUR_DATABASE_URL,
    projectId: process.env.REACT_YOUR_PROJECT_ID,
    storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_YOUR_MESSAGING_SENDER_ID
};

 */

const firebaseConfig = {
    apiKey: "AIzaSyBgh4V7gg8rHlDaD6E9Tc22sWbJYGlncbk",
    authDomain: "simple-mini-trello.firebaseapp.com",
    databaseURL: "https://simple-mini-trello.firebaseio.com",
    projectId: "simple-mini-trello",
    storageBucket: "simple-mini-trello.appspot.com",
    messagingSenderId: "549311435996",
    appId: "1:549311435996:web:0d064cdbcba2eb9268d019",
    measurementId: "G-J0JKTWGJZ4"
};

class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        console.log(firebaseConfig);
        this.auth = firebase.auth();

    }


    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();
}

export default Firebase;