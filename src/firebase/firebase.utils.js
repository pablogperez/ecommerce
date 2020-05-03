import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDo39hxx7Op26qA_3H5R5IMAkmuJzdgzD4",
    authDomain: "ecommerce-db-1.firebaseapp.com",
    databaseURL: "https://ecommerce-db-1.firebaseio.com",
    projectId: "ecommerce-db-1",
    storageBucket: "ecommerce-db-1.appspot.com",
    messagingSenderId: "527604631992",
    appId: "1:527604631992:web:6b3f0a03e4b4fa1864a74d",
    measurementId: "G-R4DNZR3TM0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;