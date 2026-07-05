import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  projectId: "gen-lang-client-0433708247",
  appId: "1:889922594475:web:1e3ec108db3a6942dbf9ee",
  apiKey: "AIzaSyAxu_IFYM-M4b2brrEbiUdqeAHBZ7V5JQE",
  authDomain: "gen-lang-client-0433708247.firebaseapp.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

signInWithEmailAndPassword(auth, "test@example.com", "password123")
  .then((userCredential) => {
    console.log("Success:", userCredential.user.uid);
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error:", error.code, error.message);
    process.exit(1);
  });
