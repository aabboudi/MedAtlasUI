import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const bootstrapAsync = async () => {
//       let userToken;

//       try {
//         userToken = await AsyncStorage.getItem('userToken');
//       } catch (e) {
//         console.error('Failed to restore token:', e);
//       }

//       if (userToken) {
//         // Validate token with backend
//         try {
//           const response = await axios.get(`${API_URL}test_token/`, {
//             headers: {
//               Authorization: `Token ${userToken}`
//             }
//           });

//           setUser(response.data.user);
//         } catch (error) {
//           console.error('Failed to authenticate token:', error);
//         }
//       }

//       setIsLoading(false);
//     };

//     bootstrapAsync();
//   }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}login/`, {
        username,
        password
      });

      await AsyncStorage.setItem('userToken', response.data.token);
      setUser(response.data.user);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const authContext = {
    user,
    isLoading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={authContext}>
      {children}
    </AuthContext.Provider>
  );
};
