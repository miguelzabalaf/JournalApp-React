import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCe0GNW4L0d-YcfkwwfRxF1kDLScYG7EOQ",
  authDomain: "journal-app-fd1ea.firebaseapp.com",
  databaseURL: "https://journal-app-fd1ea.firebaseio.com",
  projectId: "journal-app-fd1ea",
  storageBucket: "journal-app-fd1ea.appspot.com",
  messagingSenderId: "532564493498",
  appId: "1:532564493498:web:6fac7f2b91963286e2ee83"
};

// Inicializacion de la aplicacion:
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider =  new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}