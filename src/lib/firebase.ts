import { initializeApp, getApps, getApp, type FirebaseOptions } from 'firebase/app';
import { getAuth, connectAuthEmulator, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

function initializeClientApp() {
    if (typeof window === 'undefined' || !firebaseConfig.apiKey) {
        return { app: null, auth: null, db: null, googleProvider: null };
    }

    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    const auth = getAuth(app);
    const db = getFirestore(app);
    const googleProvider = new GoogleAuthProvider();

    if (process.env.NEXT_PUBLIC_USE_EMULATORS === 'true' && process.env.NODE_ENV === 'development') {
        try {
            if (auth.emulatorConfig === null) {
                connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
            }
        } catch (error) {
            console.error("Error connecting to Auth emulator", error);
        }
        try {
            // Firestore throws if it's already connected, so we check an internal property.
            if (!(db as any)._isInitialized) {
                connectFirestoreEmulator(db, '127.0.0.1', 8080);
            }
        } catch(error) {
            console.error("Error connecting to Firestore emulator", error);
        }
    }

    return { app, auth, db, googleProvider };
}

// Exporting instances this way can be problematic in Next.js.
// It's better to get them from the function when needed.
const { app, auth, db, googleProvider } = initializeClientApp();

export { app, auth, db, googleProvider };