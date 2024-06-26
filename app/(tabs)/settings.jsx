import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SettingsScreen from '@/app/Screens/Settings/SettingsScreen';
import SettingsDetails from '../Screens/Settings/SettingsDetails';

const SettingsStack = createNativeStackNavigator();

export default function SettingsNavigator() {
  return (
    <SettingsStack.Navigator screenOptions={{ headerTitleAlign: 'center' }} >
      <SettingsStack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
      <SettingsStack.Screen name="Settings Details" component={SettingsDetails} options={{ headerShown: false }} />
    </SettingsStack.Navigator>
  );
}
