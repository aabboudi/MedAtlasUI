import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import ClinicalCalculators from './ClinicalCalculators/ClinicalCalculators';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ClinicalCalculatorStack = createNativeStackNavigator();

export default function ClinicalCalculatorsNavigator() {
  return (
    // <NavigationContainer>
      <ClinicalCalculatorStack.Navigator>
        <ClinicalCalculatorStack.Screen name="Clinical Calculators" component={ClinicalCalculators} />
      </ClinicalCalculatorStack.Navigator>
    // </NavigationContainer>
  );
}
