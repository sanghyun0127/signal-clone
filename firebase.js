import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrv33NRT5PXIPsUByoKTZdYpwhRvZPCu0",
  authDomain: "signal-clone-91551.firebaseapp.com",
  projectId: "signal-clone-91551",
  storageBucket: "signal-clone-91551.appspot.com",
  messagingSenderId: "401284551379",
  appId: "1:401284551379:web:dff936b53488b202ebba26",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
