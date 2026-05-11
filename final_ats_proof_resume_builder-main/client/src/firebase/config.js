import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  browserLocalPersistence,
  setPersistence,
} from 'firebase/auth';
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from 'firebase/firestore';

// these will be given by firebase on adding your web app
const firebaseConfig = {
  apiKey: "add your own key",
  authDomain: "ai-based-resume-202d7.firebaseapp.com",
  projectId: "ai-based-resume-202d7",
  storageBucket: "ai-based-resume-202d7.firebasestorage.app",
  messagingSenderId: "160271629625",
  appId: "1:160271629625:web:973cfb3ab64cf749043ce8",
  measurementId: "G-3ZZ0WL27GQ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Explicitly keep the auth session in localStorage so it survives
// tab switches, page refreshes, and browser restarts.
setPersistence(auth, browserLocalPersistence).catch(console.error);


// Firestore with IndexedDB offline persistence — auto-caches on device
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});
