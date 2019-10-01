import * as firebase from "firebase/app";
import "firebase/auth";

let config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "malamapono-84eeb.firebaseapp.com",
  databaseURL: "https://malamapono-84eeb.firebaseio.com",
  projectId: "malamapono-84eeb",
  storageBucket: "malamapono-84eeb.appspot.com",
  messagingSenderId: "6623129104",
  appId: "1:6623129104:web:407681bdf92a0ea2f4e495"
};
const app = firebase.initializeApp(config);

export default app;