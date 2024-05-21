import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC_szx5dOduCsbtpTCjCgoeR-14VMQbaqg",
  authDomain: "pg-project-7d827.firebaseapp.com",
  projectId: "pg-project-7d827",
  storageBucket: "pg-project-7d827.appspot.com",
  messagingSenderId: "960630156280",
  appId: "1:960630156280:web:f8072c07c9817a3b37040d",
  measurementId: "G-2TW126DBVK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
