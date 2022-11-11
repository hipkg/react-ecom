import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDzvMMGPbndUHTr1RLEiWD3tWCqCB_2qgQ",
  authDomain: "cakeandbakes-dff18.firebaseapp.com",
  projectId: "cakeandbakes-dff18",
  storageBucket: "cakeandbakes-dff18.appspot.com",
  messagingSenderId: "979655131971",
  appId: "1:979655131971:web:a2e352c3c35079393d65f6",
  measurementId: "G-CZ05MHL9JH"
};

    
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

  
export { database };