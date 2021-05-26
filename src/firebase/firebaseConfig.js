import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNJ63I8DED73AYGQxXGTk12eouH4eZ-Aw",
    authDomain: "react-app-cursos-7f08e.firebaseapp.com",
    projectId: "react-app-cursos-7f08e",
    storageBucket: "react-app-cursos-7f08e.appspot.com",
    messagingSenderId: "721276898942",
    appId: "1:721276898942:web:0cde73e21e84beb49d122f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }