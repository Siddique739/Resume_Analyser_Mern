// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuLngAKa1bOwTTnm99XNsw87tn-B7thbQ",
  authDomain: "mernai-9451d.firebaseapp.com",
  projectId: "mernai-9451d",
  storageBucket: "mernai-9451d.firebasestorage.app",
  messagingSenderId: "499407317077",
  appId: "1:499407317077:web:8603f1302b6f1baf214cdc",
  measurementId: "G-RNQ3S0DH4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'  // 👈 add this
})

export {auth, provider}