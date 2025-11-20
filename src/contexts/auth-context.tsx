'use client';

import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, type Auth } from 'firebase/auth';
import { getFirebaseAuth } from '@/lib/firebase';
import type { User } from '@/lib/types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // getFirebaseAuth() might not be initialized on first render.
    // We'll get the instance and then set up the listener.
    const auth = getFirebaseAuth();
    
    if (auth) {
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        setUser(firebaseUser as User | null);
        setLoading(false);
      });
      return () => unsubscribe();
    } else {
        // If auth is not ready, it's likely because Firebase hasn't initialized.
        // The initialization is async and client-side only. We'll set loading to false
        // to prevent an infinite loading state if initialization fails.
        setLoading(false);
    }

  }, []);

  const value = { user, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};
