import {getApp,getApps,initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCqDVKEsiy1GL0ezmCpVT1hU1tzPyvg0jw",
    authDomain: "mygpt-d493f.firebaseapp.com",
    projectId: "mygpt-d493f",
    storageBucket: "mygpt-d493f.appspot.com",
    messagingSenderId: "1059781265856",
    appId: "1:1059781265856:web:28b0b2588d23f4cdaae025"
  };
  
// Initialize Firebase
const app= getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};