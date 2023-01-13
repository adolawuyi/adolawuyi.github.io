import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from '@firebase/firestore';

const firebaseConfig = {
  apiKey:"",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig);
const firebase = getFirestore(app);