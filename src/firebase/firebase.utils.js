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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    //console.log(snapShot.data()); 

    if (!snapShot.exists) {
        const { email, displayName } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }
        catch (error) {
            console.log('Error creating user', error.message);
            alert(error);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;