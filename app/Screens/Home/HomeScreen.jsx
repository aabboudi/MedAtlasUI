import React from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';

import { HorizontalCard, VerticalCard } from '@/components/Card';
import MoreButton from '@/components/MoreButton';
import { Text, View } from '@/components/Themed';

import topicsData from '@/assets/temp_data/topicsData.json';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.px_20]}>
        {getGreetingMessage()}, Dr. Smith
      </Text>
      <View style={styles.separator} lightColor="#ccc" darkColor="rgba(255,255,255,0.1)" />
      
      <View style={[styles.rowView, styles.px_20]}>
        <Text style={styles.rowTitle}>Quick Access</Text>
        <MoreButton
          title="Search Instead"
          // onPress={() => handleNavigate('Topics')}
          // onPress={() => handleNavigate('Topics', { topics: topicsData })}
          // onPress={() => navigation.navigate('Search')}
          onPress={() => navigation.navigate('modal')}
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {topicsData.slice(0, 5).map((topic, idx) => (
          <HorizontalCard
            key={idx}
            title={topic.name}
            // onPress={() => handleNavigate('TopicsDetails', { topic })}
            style={[
              idx === 0 && { marginLeft: 20 },
              idx === 4 && { marginRight: 20 },
            ]}
          />
        ))}
      </ScrollView>

      <View style={styles.separator} lightColor="#ccc" darkColor="rgba(255,255,255,0.1)" />

      <View style={[styles.rowView, styles.px_20]}>
        <Text style={styles.rowTitle}>Services</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[styles.justifyCenter, styles.px_20]}>
        <VerticalCard
          title="Quick Search"
          content="App-wide Library"
          onPress={() =>
            navigation.navigate('Search')
          }
        />

        <VerticalCard
          title="Biological Values"
          content="Reports and Charts"
          onPress={() =>
            navigation.navigate('BiologicalValuesNavigator')
          }
        />

        <VerticalCard
          title="Clinical Calculator"
          content="Metric System"
          onPress={() =>
            navigation.navigate('ClinicalCalculatorsNavigator')
          }
        />
        <VerticalCard
          title="Medications"
          content="ATC Classified"
          onPress={() =>
            navigation.navigate('MedsNavigator')
          }
        />
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
    // paddingHorizontal: 20,
    // justifyContent: 'center',
  },
  px_20: {
    paddingHorizontal: 20,
  },
  justifyCenter: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 42,
    marginBottom: 15,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '100%',
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical: 2.5 * vh,
  },
  rowTitle: {
    fontSize: 2 * vh,
    fontWeight: 'bold',
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
