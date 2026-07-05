import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "gen-lang-client-0433708247",
  appId: "1:889922594475:web:1e3ec108db3a6942dbf9ee",
  apiKey: "AIzaSyAxu_IFYM-M4b2brrEbiUdqeAHBZ7V5JQE",
  authDomain: "gen-lang-client-0433708247.firebaseapp.com",
  storageBucket: "gen-lang-client-0433708247.firebasestorage.app",
  messagingSenderId: "889922594475",
  measurementId: "",
  firestoreDatabaseId: "ai-studio-quinnhavenpremiu-f5f1b3bd-5881-4c75-aded-7cc74103a5a0"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
