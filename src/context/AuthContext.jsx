import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import LoadingScreen from "../components/LoadingScreen";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      console.log(user);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.error(err);
  }
};
