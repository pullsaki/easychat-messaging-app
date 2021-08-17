import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyA4MKAeDOeFUGUt4siH0tugvhx2ENkLS-0",
    authDomain: "easy-chat-3a7ed.firebaseapp.com",
    projectId: "easy-chat-3a7ed",
    storageBucket: "easy-chat-3a7ed.appspot.com",
    messagingSenderId: "525962268259",
    appId: "1:525962268259:web:d9188308c4c847784b3256",
  })
  .auth();
