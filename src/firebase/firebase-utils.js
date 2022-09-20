import firebase from 'firebase//app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBjCBE960AJ5OlsXEP4KkuZWK061TnLueI",
    authDomain: "miniproject-4aa1c.firebaseapp.com",
    projectId: "miniproject-4aa1c",
    storageBucket: "miniproject-4aa1c.appspot.com",
    messagingSenderId: "1000072728237",
    appId: "1:1000072728237:web:8c74b759aff2e14d960024"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const signOut = () => auth.signOut();


export default firebase;
