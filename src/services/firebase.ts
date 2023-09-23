import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAuRhwlA6gP1b6mirqld1IKodEfUWLzUGY",
  authDomain: "auth-420e4.firebaseapp.com",
  projectId: "auth-420e4",
  storageBucket: "auth-420e4.appspot.com",
  messagingSenderId: "867552248174",
  appId: "1:867552248174:web:a942aab34062125a3a817f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)