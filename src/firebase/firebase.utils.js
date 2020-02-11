import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyA6niSa-9HvgE1KlIvInX0uozVIqhJ-DU4',
    authDomain: 'crwn-clothing-52c2d.firebaseapp.com',
    databaseURL: 'https://crwn-clothing-52c2d.firebaseio.com',
    projectId: 'crwn-clothing-52c2d',
    storageBucket: 'crwn-clothing-52c2d.appspot.com',
    messagingSenderId: '591623920541',
    appId: '1:591623920541:web:64a87a9ee6fe36c97b2d74'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
