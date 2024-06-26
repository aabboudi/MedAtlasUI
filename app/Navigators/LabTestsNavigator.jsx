import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LabTests from '../Screens/Home/LabTests/LabTests';
import LabTestChart from '../Screens/Home/LabTests/LabTestChart';

const LabTestsStack = createNativeStackNavigator();

export default function BiologicalValuesNavigator() {
  return (
    <LabTestsStack.Navigator
      initialRouteName='Laboratory Tests'
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitle: 'Back'
      }}
    >
      <LabTestsStack.Screen name="Laboratory Tests" component={LabTests} />
      <LabTestsStack.Screen name="Laboratory Test Chart" component={LabTestChart} />
    </LabTestsStack.Navigator>
  );
}
