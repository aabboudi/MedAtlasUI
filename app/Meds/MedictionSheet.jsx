import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const MedicationSheet = () => {
  const route = useRoute();
  const { medication } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{medication.title}</Text>
      <Text style={styles.description}>{medication.desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MedicationSheet;
