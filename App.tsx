// Switch later to App.tsx

import * as React from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';

import { Text, View } from '@/components/Themed';

import HomeScreen from '@/app/Screen_Home';
import BiologicalValues from '@/app/BiologicalValues/BiologicalValues';
import ClinicalCalculators from '@/app/ClinicalCalculators/ClinicalCalculators';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    // <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <HomeStack.Screen name="BiologicalValues" component={BiologicalValues} />
        <HomeStack.Screen name="ClinicalCalculators" component={ClinicalCalculators} />
      </HomeStack.Navigator>
    // </NavigationContainer>
  );
}

const { width, height } = Dimensions.get('window');  
const vh = height / 100;  
const vw = width / 100;   

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  justifyCenter: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2 * vh,
  },
  rowTitle: {
    fontSize: 2 * vh,
    fontWeight: 'bold',
    marginBottom: 1 * vh,
    margin: 1 * vh,
  },
  horizontalCardTopics: {
    width: 30 * vw,
    height: 15 * vh,  
    margin: 1 * vh,
    padding: 1 * vh,
    backgroundColor: '#004F98',
    borderRadius: 1 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
  },
  mb_2: {
    marginBottom: 2 * vh,
  },
});

function getGreetingMessage(hours = new Date().getHours()): string {
  let greetingMessage: string;
  switch (true) {
    case (hours >= 5 && hours < 12):
      greetingMessage = 'Good morning';
      break;
    case (hours >= 12 && hours < 18):
      greetingMessage = 'Good afternoon';
      break;
    case (hours >= 18 || hours < 5):
      greetingMessage = 'Good evening';
      break;
    default:
      greetingMessage = 'Hello';
      break;
  }
  return greetingMessage;
}

function handleNavigate(input: string): void  {
  console.log(`Navigating to: ${input}`);
};
