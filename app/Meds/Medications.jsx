import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, ScrollView} from 'react-native';
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
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const colorScheme = useColorScheme();
  const styles = globalStyles();

  useEffect(() => {
    const fetchMedications = async () => {
      try {
        const fetchedMeds = await medsFetcher(ATCCode);
        setMedications(fetchedMeds);
      } catch (error) {
        console.error('Error fetching medications:', error);
      }finally {
        setLoading(false);
      }
    };

    fetchMedications();
  }, [ATCCode]);

  if (loading) {
    return(
      <View style={{ flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator
          size="large"
          color={Colors[colorScheme ?? 'light'].text}
        />
      </View>
    )  }
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {textAlign: 'center', marginBottom: 10, marginHorizontal: 10}]}>{ ATCName.toUpperCase() }</Text>
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
