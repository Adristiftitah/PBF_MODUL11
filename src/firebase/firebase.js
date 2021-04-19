import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCeRJeZZ90h2rHKidCJ6-zX8Thqrn-Y9l4",
    authDomain: "fir-login-app-82154.firebaseapp.com",
    projectId: "fir-login-app-82154",
    storageBucket: "fir-login-app-82154.appspot.com",
    messagingSenderId: "582485000492",
    appId: "1:582485000492:web:6475d676ede36d0ee06c89",
    measurementId: "G-DT8PRHH7NT"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;