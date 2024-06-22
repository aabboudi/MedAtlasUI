import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import { VerticalCard } from '@/components/Card';
import fetchClinicalCalcs from '@/assets/fetchers/fetchClinicalCalcs';
import SearchBar from '@/components/SearchBar';
import { useNavigation } from '@react-navigation/native';

import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

export default function ClinicalCalculators() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const styles = AllStyles(Colors, colorScheme);

  useEffect(() => {
    const loadApiData = async () => {
      try {
        const result = await fetchClinicalCalcs();
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

  // Filter data based on search term
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <SearchBar
          placeholder="Search..."
          onChangeText={text => setSearchTerm(text)}
          value={searchTerm}
        />

        {filteredData.map(item => (
          <VerticalCard
            key={item._id.toString()}
            title={item.name}
            content={item.description}
            style={styles.card}
            onPress={() =>
              navigation.navigate('Calculator', {calc: item})
            }
          />
        ))}
      </View>
    </ScrollView>
  );
}

const AllStyles = (Colors, colorScheme) => StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    // justifyContent: 'center',
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
});
