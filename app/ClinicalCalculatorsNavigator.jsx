import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClinicalCalculators from './ClinicalCalculators/ClinicalCalculators';
import CalculatorUI from './ClinicalCalculators/CalculatorUI';

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
