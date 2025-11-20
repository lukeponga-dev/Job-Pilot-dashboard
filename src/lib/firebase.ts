import { initializeApp, getApps, getApp, type FirebaseOptions } from 'firebase/app';
import { getAuth, connectAuthEmulator, GoogleAuthProvider, type Auth } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator, type Firestore } from 'firebase/firestore';

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app: ReturnType<typeof initializeApp>;
let auth: Auth;
let db: Firestore;
let googleProvider: GoogleAuthProvider;

function initializeFirebase() {
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApp();
  }
  auth = getAuth(app);
  db = getFirestore(app);
  googleProvider = new GoogleAuthProvider();

  if (process.env.NEXT_PUBLIC_USE_EMULATORS === 'true' && process.env.NODE_ENV === 'development') {
    try {
      // @ts-ignore - emulatorConfig is not on the public type
      if (!auth.emulatorConfig) {
        connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
      }
    } catch (error) {
      console.error("Error connecting to Auth emulator", error);
    }
    try {
      // @ts-ignore - _isInitialized is not on the public type
      if (!db._isInitialized) {
        connectFirestoreEmulator(db, '127.0.0.1', 8080);
      }
    } catch(error) {
      console.error("Error connecting to Firestore emulator", error);
    }
  }
}

// Initialize on first import
if (typeof window !== 'undefined') {
  initializeFirebase();
}

export const getFirebaseApp = () => {
    if (!app) initializeFirebase();
    return app;
}
export const getFirebaseAuth = () => {
    if (!auth) initializeFirebase();
    return auth;
}
export const getFirestoreDb = () => {
    if (!db) initializeFirebase();
    return db;
}
export const getGoogleProvider = () => {
    if (!googleProvider) initializeFirebase();
    return googleProvider;
}
