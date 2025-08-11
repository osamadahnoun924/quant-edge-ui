import { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import type { User, UserCredential } from 'firebase/auth';
import { auth } from '../firebase';

type AuthContextType = {
  currentUser: User | null;
  signup: (email: string, password: string) => Promise<UserCredential>;
};
const initialState: AuthContextType = {
  currentUser: null,
  signup: async () => {
    throw new Error('signup function not initialized');
  },
};

const AuthContext = createContext(initialState);

export const useAuth = () => {
  return useContext(AuthContext);
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const signup = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
