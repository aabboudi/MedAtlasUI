import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

// const BiologicalChart = ({ route }) => {
const BiologicalChart = () => {
  const route = useRoute();
  const chart = route.params;

  return (
    <View>
      <Text style={{ color: 'white' }}>
        Test
      </Text>
      <Text style={{ color: 'white' }}>
        { chart.name }
      </Text>
    </View>
  );
};

const AllStyles = (Colors, colorScheme) => StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: Colors[colorScheme ?? 'light'].text,
  },
  inputGroup: {
    width: '100%', // Full width
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  inputLabel: {
    fontSize: 16,
    color: Colors[colorScheme ?? 'light'].textMuted,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    backgroundColor: Colors[colorScheme ?? 'light'].background,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    fontSize: 16,
    color: Colors[colorScheme ?? 'light'].textMuted,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#3a445d', // Bootstrap primary blue
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  buttonText: {
    color: '#fff', // White text on button
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: 'green', // Keep the result in green to highlight success
    fontWeight: 'bold',
  },
});

export default BiologicalChart;
