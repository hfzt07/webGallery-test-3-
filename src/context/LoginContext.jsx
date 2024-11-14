import React, { createContext, useContext, useState } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
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
      
      const querySnapshot = await getDocs(collection(db, 'akun'));
      
      const userDoc = querySnapshot.docs.find(doc => {
        const data = doc.data();
        return data.usernameAkun === username && data.passwordAkun === password;
      });

      if (!userDoc) {
        return { success: false, error: 'Username atau password salah' };
      }

      const userData = userDoc.data();
      
      const userInfo = {
        id: userDoc.id,
        username: userData.usernameAkun,
        role: userData.jenisAkun
      };

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
      return { 
        success: false, 
        error: 'Terjadi kesalahan saat login. Silakan coba lagi.' 
      };
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