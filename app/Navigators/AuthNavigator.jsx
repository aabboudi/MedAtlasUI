import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '@/app/Screens/Auth/LoginScreen';
import SignupScreen from '@/app/Screens/Auth/SignupScreen';

const AuthStack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator
    initialRouteName='LoginScreen'
    screenOptions={{
      headerTitleAlign: 'center',
      headerBackTitle: 'Back'
    }} >
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
}
