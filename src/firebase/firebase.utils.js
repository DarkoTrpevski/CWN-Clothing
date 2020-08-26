import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDnKMWdqIvbg3X_AhpgaikhQo8IHBMH2UQ",
  authDomain: "crwn-clothing-db-7857a.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-7857a.firebaseio.com",
  projectId: "crwn-clothing-db-7857a",
  storageBucket: "crwn-clothing-db-7857a.appspot.com",
  messagingSenderId: "825780754786",
  appId: "1:825780754786:web:c09841fc9f3e644d1db43b",
  measurementId: "G-QR3MSLFRRD"
}

firebase.initializeApp(config);

//Get the UID from firebase auth, and store it in the users Collection(DB)
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Setup Google Auth Utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;