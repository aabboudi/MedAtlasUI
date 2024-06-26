import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnatomicalSubgroup from '../Screens/Home/Meds/AnatomicalSubgroup';
import TherapeuticSubgroup from '../Screens/Home/Meds/TherapeuticSubgroup';
import Medications from '../Screens/Home/Meds/Medications';
import MedicationSheet from '../Screens/Home/Meds/MedicationSheet';

const MedsStack = createNativeStackNavigator();

export default function MedsNavigator() {
  return (
    <MedsStack.Navigator
      initialRouteName='Anatomical Subgroup'
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitle: 'Back'
      }}
    >
      <MedsStack.Screen name="Anatomical Subgroup" component={AnatomicalSubgroup} />
      <MedsStack.Screen name="Therapeutic Subgroup" component={TherapeuticSubgroup} />
      <MedsStack.Screen name="Medications" component={Medications} />
      <MedsStack.Screen name="Medication Sheet" component={MedicationSheet} />
    </MedsStack.Navigator>
  );
}
