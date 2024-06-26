import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClinicalCalculators from '../Screens/Home/ClinicalCalculators/ClinicalCalculators';
import CalculatorUI from '../Screens/Home/ClinicalCalculators/CalculatorUI';

const ClinicalCalculatorStack = createNativeStackNavigator();

export default function ClinicalCalculatorsNavigator() {
  return (
    <ClinicalCalculatorStack.Navigator
      initialRouteName='Clinical Calculators'
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitle: 'Back'
      }}
    >
      <ClinicalCalculatorStack.Screen name="Clinical Calculators" component={ClinicalCalculators} />
      <ClinicalCalculatorStack.Screen name="Calculator" component={CalculatorUI} />
    </ClinicalCalculatorStack.Navigator>
  );
}
