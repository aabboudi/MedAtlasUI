import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import fetchDataAnatomy from '@/assets/fetchers/fetchDataAnatomy';
import { VerticalCard } from '@/components/Card';
// import fetchClinicalCalcs from '@/assets/fetchers/fetchCilnicalCalcs';

export default function ClinicalCalculators() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const handleCardPress = (category) => {
    console.log(`Card pressed: ${category.name}`);
    navigation.navigate('cinicalCalcsSheet', { category });
  };


  useEffect(() => {
    const loadApiData = async () => {
      try {
        const result = await fetchDataAnatomy();
        setData(result);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    loadApiData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#ffffff" />;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {data.map((item) => (
          <VerticalCard
            key={item._id.toString()} 
            title={item.name}
            content={item.description || "No description available"} 
            style={styles.card}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  card: {
    marginBottom: 16,
  },
});
