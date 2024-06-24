import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BiologicalValues from './BiologicalValues/BiologicalValues';
import BiologicalChart from './BiologicalValues/BiologicalChart';

const BiologicalValuesStack = createNativeStackNavigator();

export default function BiologicalValuesNavigator() {
  return (
    <BiologicalValuesStack.Navigator
      initialRouteName='Biological Values'
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitle: 'Back'
      }}
    >
      <BiologicalValuesStack.Screen name="Biological Values" component={BiologicalValues} />
      <BiologicalValuesStack.Screen name="Biological Chart" component={BiologicalChart} />
    </BiologicalValuesStack.Navigator>
  );
}
