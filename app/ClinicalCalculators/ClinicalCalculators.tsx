import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import fetchDataAnatomy, { ApiResponse } from '@/assets/fetchers/fetchDataAnatomy';
import Card from '@/components/Card';

export default function ClinicalCalculators() {
  const [data, setData] = useState<ApiResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
          <Card
            key={item._id}
            type="vertical"
            title={item.part}
            content={item.description}
            style={styles.card}
            // onPress={() => navigation.navigate('BiologicalValues')}
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
