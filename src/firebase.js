import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const {
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCKET,
  VITE_MESSAGING_SENDER_ID,
  VITE_APP_ID,
} = import.meta.env;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VITE_API_KEY,

  authDomain: VITE_AUTH_DOMAIN,

  projectId: VITE_PROJECT_ID,

  storageBucket: VITE_STORAGE_BUCKET,

  messagingSenderId: VITE_MESSAGING_SENDER_ID,

  appId: VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function getUser(uid = 'kSL8utDt8NVPLe4Zw0qh') {
  const docRef = doc(db, 'user', uid);
  const document = await getDoc(docRef);
  if (!document.exists()) {
    return {};
  }
  return document.data();
}
