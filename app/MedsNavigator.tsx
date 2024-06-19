import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import AnatomicalSubgroup from './Meds/AnatomicalSubgroup';
import TherapeuticSubgroup from './Meds/TherapeuticSubgroup';
import Medications from './Meds/Medications';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MedsStack = createNativeStackNavigator();

export default function MedsNavigator() {
  return (
    // <NavigationContainer>
      <MedsStack.Navigator>
        <MedsStack.Screen name="Anatomical Subgroup" component={AnatomicalSubgroup} />
        <MedsStack.Screen name="Therapeutic Subgroup" component={TherapeuticSubgroup} />
        <MedsStack.Screen name="Medications" component={Medications} />
      </MedsStack.Navigator>
    // </NavigationContainer>
  );
}
 