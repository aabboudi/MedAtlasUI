import * as React from 'react';
import ClinicalCalculators from './ClinicalCalculators/ClinicalCalculators';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ClinicalCalculatorStack = createNativeStackNavigator();

export default function ClinicalCalculatorsNavigator() {
  return (
    <ClinicalCalculatorStack.Navigator initialRouteName='Clinical Calculators'>
      <ClinicalCalculatorStack.Screen name="Clinical Calculators" component={ClinicalCalculators} />
    </ClinicalCalculatorStack.Navigator>
  );
}
