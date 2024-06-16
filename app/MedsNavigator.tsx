import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Meds from './Meds/Meds'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MedsStack = createNativeStackNavigator();

export default function MedsNavigator() {
  return (
    // <NavigationContainer>
      <MedsStack.Navigator>
        <MedsStack.Screen name="Medications" component={Meds} />
      </MedsStack.Navigator>
    // </NavigationContainer>
  );
}
