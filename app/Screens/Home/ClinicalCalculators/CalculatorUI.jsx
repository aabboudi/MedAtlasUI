import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

const CalculatorUI = ({ route }) => {
  const colorScheme = useColorScheme();
  const styles = AllStyles(Colors, colorScheme);
  const { calc } = route.params;
  const [inputs, setInputs] = useState(calc.input.reduce((acc, input) => ({ ...acc, [input.name]: '' }), {}));
  const [result, setResult] = useState(null);

  const handleInputChange = (name, value) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleCalculate = () => {
    try {
      const preparedInputs = calc.input.map(input => {
        if (input.type === 'number') {
          return parseFloat(inputs[input.name]);
        } else if (input.type === 'string' || input.type === 'NaN') {
          return `"${inputs[input.name]}"`;
        }
        return inputs[input.name];
      });

      const formulaFunc = new Function(...calc.input.map(input => input.name), `return ${calc.formula};`);
      const calcResult = formulaFunc(...preparedInputs);

      setResult(`${calc.output.name} is ${calcResult.toFixed(2)} ${calc.output.unit}`);
    } catch (error) {
      setResult("Error in calculation. Please check input values.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>{calc.name.replace('Calculator', '')}</Text>
      {calc.input.map((input, index) => (
        <View key={index} style={styles.inputGroup}>
          <Text style={styles.inputLabel}>{input.description}:</Text>
          <TextInput
            style={styles.input}
            value={inputs[input.name]}
            onChangeText={(text) => handleInputChange(input.name, text)}
            placeholder="Enter value"
            placeholderTextColor="#666"
            keyboardType={input.type === 'number' ? 'numeric' : 'default'}
          />
        </View>
      ))}

      <TouchableOpacity style={styles.button} onPress={handleCalculate}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>

      {result && <Text style={styles.result}>{result}</Text>}
    </ScrollView>
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

export default CalculatorUI;
