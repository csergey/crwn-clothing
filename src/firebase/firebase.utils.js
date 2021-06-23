import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useRef } from 'react';

const config = {
    apiKey: "AIzaSyA7XwypHoRKIO25OUGYJAuKfAFU2FJsGdg",
    authDomain: "crwn-db-60cfd.firebaseapp.com",
    projectId: "crwn-db-60cfd",
    storageBucket: "crwn-db-60cfd.appspot.com",
    messagingSenderId: "564967772769",
    appId: "1:564967772769:web:af876cb02fe976c5fa9020"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createAt = new Date();

        //console.log('create new user');

        try{
            await userRef.set({
                displayName, 
                email,
                createAt,
                ...additionalData
            });
        }
        catch(error){
            console.log('userRef.set() -> error creating user',error.message);
        }
    }

    return userRef;

    /*
    firestore.doc(`/users/${userAuth.uid}`);
    firestore.doc('/users/:userId');
    firestore.doc('/users/');
    */

  }
  
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;