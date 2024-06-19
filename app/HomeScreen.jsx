import React from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { HorizontalCard, VerticalCard } from '@/components/Card';
import MoreButton from '@/components/MoreButton';
import { Text, View } from '@/components/Themed';

import topicsData from '@/assets/temp_data/topicsData.json';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {getGreetingMessage()}, Dr. Smith
      </Text>
      <View style={styles.separator} lightColor="#ccc" darkColor="rgba(255,255,255,0.1)" />
      
      <View style={styles.rowView}>
        <Text style={styles.rowTitle}>Quick Access</Text>
        <MoreButton
          title="See All"
          onPress={() => handleNavigate('Topics')}
          // onPress={() => handleNavigate('Topics', { topics: topicsData })}
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.mb_2}>
        {topicsData.slice(0, 5).map((topic, idx) => (
          <HorizontalCard
            key={idx}
            title={topic.name}
            // onPress={() => handleNavigate('TopicsDetails', { topic })}
            // style={styles.horizontalCardTopics}
          />
        ))}
      </ScrollView>

      <View style={styles.separator} lightColor="#ccc" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.rowView}>
        <Text style={styles.rowTitle}>Services</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.mb_2} contentContainerStyle={styles.justifyCenter}>
        <VerticalCard title="Biological Values" content="Reports and Charts" onPress={() => navigation.navigate('BiologicalValues')} />
        <VerticalCard title="Clinical Calculator" content="Metric System" onPress={() => navigation.navigate('ClinicalCalculatorsNavigator')} />
        <VerticalCard title="Medicine" content="ATC Classified" onPress={() => navigation.navigate('MedsNavigator')} />
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
    justifyContent: 'center',
  },
  justifyCenter: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 42,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
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
  mb_2: {
    marginBottom: 2 * vh,
  },
});

function getGreetingMessage(hours = new Date().getHours()) {
  let greetingMessage;
  switch (true) {
    case hours >= 5 && hours < 12:
      greetingMessage = 'Good morning';
      break;
    case hours >= 12 && hours < 18:
      greetingMessage = 'Good afternoon';
      break;
    default:
      greetingMessage = 'Good evening';
      break;
  }
  return greetingMessage;
}

function handleNavigate(input) {
  console.log(`Navigating to: ${input}`);
}
