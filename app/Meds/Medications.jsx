import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { VerticalCard } from '@/components/Card';
import { useRoute, useNavigation } from '@react-navigation/native';
import medsFetcher from '@/assets/fetchers/medsFetcher';
import { useColorScheme } from 'react-native';
import Colors from '@/constants/Colors';
import globalStyles from '@/assets/styles/styles';

const Medications = () => {
  const route = useRoute();
  const { ATCCode, ATCName } = route.params;
  const [medications, setMedications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const styles = globalStyles();

  useEffect(() => {
    const fetchMedications = async () => {
      try {
        const fetchedMeds = await medsFetcher(ATCCode);
        setMedications(fetchedMeds);
        if (fetchedMeds.length === 0) {
          setError('No medications found');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMedications();
  }, [ATCCode]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color={Colors[colorScheme ?? 'light'].text} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={[styles.title, { textAlign: 'center', marginBottom: 10, marginHorizontal: 10 }]}>
          {error}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { textAlign: 'center', marginBottom: 10, marginHorizontal: 10 }]}>
        {ATCName.toUpperCase()}
      </Text>
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

export default Medications;
