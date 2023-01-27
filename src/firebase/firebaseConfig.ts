import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

interface IFirebaseConfig {
    apiKey:string,
    authDomain:string,
    projectId:string,
    storageBucket:string,
    messagingSenderId:string,
    appId:string,
    measurementId:string
}

const firebaseConfig:IFirebaseConfig = {
    apiKey: "AIzaSyAVPg5wQP3xx89STI9qZ2WXI4b0-dnAeYg",
    authDomain: "postsline-5fec3.firebaseapp.com",
    projectId: "postsline-5fec3",
    storageBucket: "postsline-5fec3.appspot.com",
    messagingSenderId: "497144778366",
    appId: "1:497144778366:web:6601e0a1faa64239d8d22f",
    measurementId: "G-MG61VBDRSM"
};
  
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();