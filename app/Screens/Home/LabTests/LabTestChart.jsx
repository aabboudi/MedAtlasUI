import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import globalStyles from '@/assets/styles/styles';

const LabTestChart = () => {
  const route = useRoute();
  const { chart } = route.params;
  const styles = globalStyles();

  return (
    <ScrollView>
      <View style={[styles.container, { alignItems: 'start', padding: 20 }]}>
        <Text style={[styles.title, {textAlign: 'center'}]}>{chart.title}</Text>

        {chart.parameters.map((param, index) => (
          <View key={index}>
            <Text style={styles.rowTitle}>Test {index}: {param.name || "Name"}</Text>
            <Text style={styles.text}>Norme {index}: {param.norme_bio || "Placeholder"}</Text>
            <Text style={styles.text}>{param.interpretation}</Text>

            {index < chart.parameters.length - 1 && (
              <View style={styles.separator} lightColor="#ccc" darkColor="rgba(255,255,255,0.1)" />
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default LabTestChart;
