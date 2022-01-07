import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAZ1m_DNMqOnLGG65qEBk8BpUjRD668yME",
    authDomain: "crwn-db-d6c1c.firebaseapp.com",
    projectId: "crwn-db-d6c1c",
    storageBucket: "crwn-db-d6c1c.appspot.com",
    messagingSenderId: "1085384011663",
    appId: "1:1085384011663:web:23b5ea4ef51453301f25fa",
    measurementId: "G-Y5CT6PDBC6"
  };  

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

