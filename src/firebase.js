import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKJlI13na_93-DiButwbxLyY6Q7selbh4",
  authDomain: "whatsapp-1da63.firebaseapp.com",
  projectId: "whatsapp-1da63",
  storageBucket: "whatsapp-1da63.appspot.com",
  messagingSenderId: "662809017016",
  appId: "1:662809017016:web:3c86e3d238b92891b5d24d",
  measurementId: "G-KVPEYKQ989"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
