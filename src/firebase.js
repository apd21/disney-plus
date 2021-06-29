  
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCdi5TsAKbeICFg9GCl6ofLwDGKPWGJe9I",
    authDomain: "disney-5904b.firebaseapp.com",
    projectId: "disney-5904b",
    storageBucket: "disney-5904b.appspot.com",
    messagingSenderId: "532108951728",
    appId: "1:532108951728:web:ffb0a8be9d45d7398afb75",
    measurementId: "G-EK94KEFMJQ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;