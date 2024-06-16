import * as React from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import Card from '@/components/Card';
import MoreButton from '@/components/MoreButton';
import { Text, View } from '@/components/Themed';

import topicsData from '@/assets/temp_data/topicsData.json';

type HomeScreenProps = {
  navigation: NavigationProp<any>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {getGreetingMessage()}, Dr. Smith</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <View style={styles.rowView}>
        <Text style={styles.rowTitle}>Quick Access</Text>
        <MoreButton
          title="See All"
          onPress={() => (1)}
          // onPress={() => handleNavigate(
          //   'Topics',
          //   { topics: topicsData }
          // )}
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.mb_2}>
        {topicsData.slice(0, 5).map((topic, idx) => (
          <Card
            key={idx}
            type="horizontal"
            title={topic.name}
            // onPress={() => handleNavigate('TopicsDetails', { topic })}
            style={styles.horizontalCardTopics}
          />
        ))}
      </ScrollView>

      <View style={styles.rowView}>
        <Text style={styles.rowTitle}>Services</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.mb_2} contentContainerStyle={styles.justifyCenter}>
        <Card type="vertical" title="Biological Values" content="test" onPress={() => navigation.navigate('BiologicalValues')} />
        <Card type="vertical" title="Clinical Calculator" content="" onPress={() => navigation.navigate('ClinicalCalculators')} />
        <Card type="vertical" title="Medicine" content="" onPress={() => handleNavigate('Categories')} />
      </ScrollView>
      </View>
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
