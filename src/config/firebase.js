import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBPfQCPFhXBX6qwpG_qU0CU5SKuGf1nQYk",
  authDomain: "webgallery-1.firebaseapp.com",
  projectId: "webgallery-1",
  storageBucket: "webgallery-1.appspot.com",
  messagingSenderId: "1098040584878",
  appId: "1:1098040584878:web:e4c7c8c8c8c8c8c8c8c8c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

// Export the instances
export { db, storage, app as default }; 