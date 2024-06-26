import React from 'react';
import { AuthProvider } from '@/assets/fetchers/AuthContext';
import RootLayout from '@/app/_layout';
import AuthNavigator from '@/app/Navigators/AuthNavigator';
import { Text } from 'react-native';

const App = () => {
  return (
    <AuthProvider>
      <AuthNavigator />
      <RootLayout />
    </AuthProvider>
  );
};

export default App;
