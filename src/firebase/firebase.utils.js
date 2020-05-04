import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAnMJvUl3BYjJC31PnOBUpt6uVlnU8GQhg",
  authDomain: "yesjobs-a95ef.firebaseapp.com",
  databaseURL: "https://yesjobs-a95ef.firebaseio.com",
  projectId: "yesjobs-a95ef",
  storageBucket: "yesjobs-a95ef.appspot.com",
  messagingSenderId: "728004899826",
  appId: "1:728004899826:web:30b3f23199a1115346b16b",
  measurementId: "G-8C1YJYETCF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
