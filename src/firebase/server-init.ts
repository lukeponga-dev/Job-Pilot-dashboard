import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase-admin/app';
import { getAuth, Auth } from 'firebase-admin/auth';
import { getFirestore, Firestore } from 'firebase-admin/firestore';

interface FirebaseAdminServices {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}

export function getFirebaseAdmin(): FirebaseAdminServices {
  if (getApps().length > 0) {
    const app = getApp();
    return {
      app,
      auth: getAuth(app),
      firestore: getFirestore(app),
    };
  }

  // Initialize without arguments to allow for auto-discovery of credentials
  const app = initializeApp();

  return {
    app,
    auth: getAuth(app),
    firestore: getFirestore(app),
  };
}
