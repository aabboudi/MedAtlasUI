import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { VerticalCard } from '@/components/Card';
import { useRoute, useNavigation } from '@react-navigation/native';
import medsFetcher from '@/assets/fetchers/medsFetcher';

const Medications = () => {
  const route = useRoute();
  const { ATCCode } = route.params;
  const [medications, setMedications] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchMedications = async () => {
      try {
        const fetchedMeds = await medsFetcher(ATCCode);
        setMedications(fetchedMeds);
      } catch (error) {
        console.error('Error fetching medications:', error);
      }
    };

    fetchMedications();
  }, [ATCCode]);

  return (
    <View style={styles.container}>
      <FlatList
        data={medications}
        renderItem={({ item }) => (
          <VerticalCard
            title={item.title}
            content={item.description}
            onPress={() => {
              navigation.navigate('Medication Sheet', { medication: item });
            }}
            style={{ marginBottom: 10 }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
});

export default Medications;
