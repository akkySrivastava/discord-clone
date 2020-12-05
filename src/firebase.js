import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBa6qPjH1NYxhqtfncN05BOME5QWGSxRs8",
    authDomain: "discord-clone-akky.firebaseapp.com",
    projectId: "discord-clone-akky",
    storageBucket: "discord-clone-akky.appspot.com",
    messagingSenderId: "426856372384",
    appId: "1:426856372384:web:2df9b164ff7e8c744211c5",
    measurementId: "G-611WYQNKK2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db 