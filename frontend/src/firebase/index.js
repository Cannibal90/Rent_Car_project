import firebase from "firebase/app";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDCN4yjJRwxq9LUHKPBa79uiIzlRW99l_k",
  authDomain: "car-rent-3714a.firebaseapp.com",
  projectId: "car-rent-3714a",
  storageBucket: "car-rent-3714a.appspot.com",
  messagingSenderId: "353637130998",
  appId: "1:353637130998:web:282f7dde54432f0ad242d7",
  measurementId: "G-1M51RB8C5N",
};

firebase.initializeApp(firebaseConfig);

const firebaseStorage = firebase.storage();

export { firebaseStorage, firebase as default };
