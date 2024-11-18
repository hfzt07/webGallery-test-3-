import React, { createContext, useContext, useState } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (username, password) => {
    try {
      setLoading(true);
      
      const akunRef = collection(db, 'akun');
      const q = query(akunRef, where('usernameAkun', '==', username));
      
      const querySnapshot = await getDocs(q);
      console.log('Query result:', querySnapshot.size);

      if (querySnapshot.empty) {
        return { success: false, error: 'Username tidak ditemukan' };
      }

      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();

      if (userData.passwordAkun !== password) {
        return { success: false, error: 'Password salah' };
      }

      const userInfo = {
        id: userDoc.id,
        username: userData.usernameAkun,
        role: userData.jenisAkun,
      };

      console.log('User info:', userInfo);

      localStorage.setItem('user', JSON.stringify(userInfo));
      setUser(userInfo);
      setIsLoggedIn(true);
      setShowLogin(false);

      switch (userData.jenisAkun) {
        case 'admin':
          navigate('/admin');
          break;
        case 'moderator':
          navigate('/moderator/profile');
          break;
        default:
          navigate('/user');
      }
      return { success: true };

    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Terjadi kesalahan saat login' };
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <LoginContext.Provider value={{
      isLoggedIn,
      user,
      loading,
      handleLogin,
      handleLogout,
      showLogin,
      setShowLogin
    }}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLogin() {
  return useContext(LoginContext);
} 