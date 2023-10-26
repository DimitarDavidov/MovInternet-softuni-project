import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import {connectAuthEmulator, getAuth} from 'firebase/auth' 

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

const auth = getAuth(app)
connectAuthEmulator(auth, "http://localhost:9099")

export default app
