

import firebase from "firebase/compat/app";

import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8qQMEKvFHm44tQhSbpoSlMfFsqMpHumI",
  authDomain: "robbys-to-do.firebaseapp.com",
  databaseURL: "https://robbys-to-do-default-rtdb.firebaseio.com",
  projectId: "robbys-to-do",
  storageBucket: "robbys-to-do.appspot.com",
  messagingSenderId: "660024137419",
  appId: "1:660024137419:web:0b86ed04203df58d932d4e"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const appAuth = firebaseApp.auth()

export { appAuth }