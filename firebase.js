import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAyEYOrq2b-O0wpnywG6UGhBX8TX26Er2w",
  authDomain: "gdocs-vimal.firebaseapp.com",
  projectId: "gdocs-vimal",
  storageBucket: "gdocs-vimal.appspot.com",
  messagingSenderId: "1034171728813",
  appId: "1:1034171728813:web:17c1a63dfc47c934cc5724",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export {db};

