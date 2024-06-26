import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadStoredData = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      const storedUser = await AsyncStorage.getItem('user');
      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      }
    };

    loadStoredData();
  }, []);

  const login = async (username, password) => {
    setLoading(true);
    const loginData = {
      username: 'John',
      password: 'password',
    };

    console.log(loginData);
    
    try {
      const response = await fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      console.log("###############################");
      console.log(response);

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const responseData = await response.json();
      const { token, user } = responseData;
      setToken(token);
      setUser(user);
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Login Error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (username, password, email) => {
    setLoading(true);
    const signupData = { username, password, email };

    try {
      const response = await fetch('http://127.0.0.1:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const responseData = await response.json();
      const { token, user } = responseData;
      setToken(token);
      setUser(user);
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Signup Error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');
      setToken(null);
      setUser(null);
    } catch (error) {
      console.error('Logout Error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, login, signUp, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
