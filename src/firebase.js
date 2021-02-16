import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFwWxPahnB04sGsFZ8pThkAB6-pBiRHyI",
    authDomain: "challenge-d2771.firebaseapp.com",
    projectId: "challenge-d2771",
    storageBucket: "challenge-d2771.appspot.com",
    messagingSenderId: "1071295212751",
    appId: "1:1071295212751:web:54a8c0e618fb9e255d9bba",
    measurementId: "G-K06JGRYJRT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {
    db, auth
  };

   