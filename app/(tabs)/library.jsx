import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import globalStyles from '@/assets/styles/styles';

import { HorizontalCard } from '@/components/Card';
import topicsData from '@/assets/temp_data/topicsData.json';

export default function Library() {
  const styles = globalStyles();
  return (
    // <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text style={[styles.title, { marginHorizontal: 20, marginTop: 10 }]}>Test</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {topicsData.slice(0, 5).map((topic, idx) => (
            <HorizontalCard
              key={idx}
              title={topic.name}
              // onPress={() => handleNavigate('TopicsDetails', { topic })}
              style={[
                idx === 0 && { marginLeft: 20 },
                idx === 4 && { marginRight: 20 },
                { width: 200, height: 200, }
              ]}
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
