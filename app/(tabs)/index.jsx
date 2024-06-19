import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import HomeScreen from '../HomeScreen';
import BiologicalValues from '../BiologicalValues/BiologicalValues';
import ClinicalCalculators from '../ClinicalCalculators/ClinicalCalculators';
import ClinicalCalculatorsNavigator from '../ClinicalCalculatorsNavigator';
import MedsNavigator from '../MedsNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerTitleAlign: 'center' }} >
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="BiologicalValues" component={BiologicalValues} />
      <HomeStack.Screen name="ClinicalCalculatorsNavigator" component={ClinicalCalculatorsNavigator} options={{ headerShown: false }} />
      <HomeStack.Screen name="MedsNavigator" component={MedsNavigator} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
}
