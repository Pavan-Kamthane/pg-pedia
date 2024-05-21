import { auth, db } from './firebase';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userType, setUserType] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Try to fetch user data from both collections
        let userDoc = await getDoc(doc(db, "students", user.uid));
        if (!userDoc.exists()) {
          userDoc = await getDoc(doc(db, "faculties", user.uid));
          setUserType('faculty');
        } else {
          setUserType('student');
        }
        
        if (userDoc.exists()) {
          setCurrentUser({ ...user, ...userDoc.data() });
        } else {
          setCurrentUser(null);
        }
      } else {
        setCurrentUser(null);
        setUserType(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signUp = async (email, password, name, userType) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store user data in the appropriate Firestore collection
    const collection = userType === 'student' ? "students" : "faculties";
    await setDoc(doc(db, collection, user.uid), {
      uid: user.uid,
      email: user.email,
      name: name,
      userType: userType,
      createdAt: new Date().toISOString()
    });

    // Update currentUser state with additional data
    setCurrentUser({ ...user, name, userType });
    setUserType(userType);
  };

  const logIn = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Try to fetch user data from both collections
    let userDoc = await getDoc(doc(db, "students", user.uid));
    if (!userDoc.exists()) {
      userDoc = await getDoc(doc(db, "faculties", user.uid));
      setUserType('faculty');
    } else {
      setUserType('student');
    }

    if (userDoc.exists()) {
      setCurrentUser({ ...user, ...userDoc.data() });
    } else {
      setCurrentUser(null);
    }
  };

  const logOut = () => {
    return signOut(auth);
  };

  const value = {
    currentUser,
    userType,
    signUp,
    logIn,
    logOut
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
