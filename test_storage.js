import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadString } from 'firebase/storage';

const firebaseConfig = {
  projectId: "gen-lang-client-0433708247",
  appId: "1:889922594475:web:1e3ec108db3a6942dbf9ee",
  apiKey: "AIzaSyAxu_IFYM-M4b2brrEbiUdqeAHBZ7V5JQE",
  authDomain: "gen-lang-client-0433708247.firebaseapp.com",
  storageBucket: "gen-lang-client-0433708247.firebasestorage.app",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageRef = ref(storage, 'test.txt');

uploadString(storageRef, 'hello world').then(() => {
  console.log('Uploaded!');
  process.exit(0);
}).catch((e) => {
  console.error('Error:', e);
  process.exit(1);
});
