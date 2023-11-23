import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth} from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore'


const app = firebase.initializeApp({
  apiKey: "AIzaSyCCe_-TgeDV9NPrcR3IwI6yJAwjB2Eoo6g",
  authDomain: "softuni-project-5b6eb.firebaseapp.com",
  databaseURL: "https://softuni-project-5b6eb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "softuni-project-5b6eb",
  storageBucket: "softuni-project-5b6eb.appspot.com",
  messagingSenderId: "650713078079",
  appId: "1:650713078079:web:151fdd03614859f9d69b8a",
  measurementId: "G-HP2RWSY31N"
});

export const auth = getAuth(app)

export const db = getFirestore(app)

export default app