import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_SID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MID,
};

firebase.initializeApp(config);

if (process.env.NODE_ENV === "development") {
  firebase.auth().useEmulator("http://localhost:9099/");
  firebase.firestore().useEmulator("localhost", 8080);
  firebase.functions().useEmulator("localhost", 5001);
}


export const auth = firebase.auth
export const firestore = firebase.firestore
export const functions = firebase.functions
export const storage = firebase.storage

export default firebase;
