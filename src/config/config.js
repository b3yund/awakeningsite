import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDc4MVCyNdR2xdr7z6p61eUc2XksZTq4hU",
  authDomain: "awakeningsite-3b651.firebaseapp.com",
  databaseURL: "https://awakeningsite-3b651-default-rtdb.firebaseio.com",
  projectId: "awakeningsite-3b651",
  storageBucket: "awakeningsite-3b651.appspot.com",
  messagingSenderId: "391663832306",
  appId: "1:391663832306:web:b991d45671aa585f5bd46b",
  measurementId: "G-Y9FPEH84VD"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fs = getFirestore(app);
const storage = getStorage(app);

export {
  auth,
  fs,
  storage
};