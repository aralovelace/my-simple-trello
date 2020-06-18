import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBgh4V7gg8rHlDaD6E9Tc22sWbJYGlncbk",
    authDomain: "simple-mini-trello.firebaseapp.com",
    databaseURL: "https://simple-mini-trello.firebaseio.com",
    projectId: "simple-mini-trello",
    storageBucket: "simple-mini-trello.appspot.com",
    messagingSenderId: "549311435996",
    appId: "1:549311435996:web:0d064cdbcba2eb9268d019",
    measurementId: "G-J0JKTWGJZ4"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
