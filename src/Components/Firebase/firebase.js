import app from 'firebase/app';

const config = {
    apiKey: process.env.REACT_YOUR_API_KEY,
    authDomain: process.env.REACT_YOUR_AUTH_DOMAIN,
    databaseURL: process.env.REACT_YOUR_DATABASE_URL,
    projectId: process.env.REACT_YOUR_PROJECT_ID,
    storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_YOUR_MESSAGING_SENDER_ID
};

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}

export default Firebase;