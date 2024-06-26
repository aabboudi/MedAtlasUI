import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Screens/Home/HomeScreen';
import Search from '../Screens/Home/SearchScreen';
import BiologicalValuesNavigator from '../Navigators/BiologicalValuesNavigator';
import ClinicalCalculatorsNavigator from '../Navigators/ClinicalCalculatorsNavigator';
import MedsNavigator from '../Navigators/MedsNavigator';

const HomeStack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerTitleAlign: 'center' }} >
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Search" component={Search} />
      <HomeStack.Screen name="BiologicalValuesNavigator" component={BiologicalValuesNavigator} options={{ headerShown: false }} />
      <HomeStack.Screen name="ClinicalCalculatorsNavigator" component={ClinicalCalculatorsNavigator} options={{ headerShown: false }} />
      <HomeStack.Screen name="MedsNavigator" component={MedsNavigator} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
}
