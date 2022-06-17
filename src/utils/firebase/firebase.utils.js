// Initializing firebase app
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1_0rEn6ig7Oi4wBJupDxefkiwCeuD3EA",
  authDomain: "crwn-clothing-db-ad2f8.firebaseapp.com",
  projectId: "crwn-clothing-db-ad2f8",
  storageBucket: "crwn-clothing-db-ad2f8.appspot.com",
  messagingSenderId: "513617265124",
  appId: "1:513617265124:web:d97c604bb1c54c921fc7f1",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const SignInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  //   console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);
  //   console.log(userSnapShot);
  //   console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.messagingSenderId);
    }
  }

  return userDocRef;
};
