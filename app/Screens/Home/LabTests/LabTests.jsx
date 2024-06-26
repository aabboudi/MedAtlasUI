import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { HorizontalCard, VerticalCard } from '@/components/Card';

import fetchLabTests from '@/assets/fetchers/fetchLabTests';
import { useNavigation } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import Colors from '@/constants/Colors';


export default function BiologicalValues() {
  const navigation=useNavigation();
  const [loading, setLoading] = useState(true);
  const [labTest, setLabTest] = useState([]);
  const colorScheme = useColorScheme();


  useEffect(() => {
    const getLabTests = async () => {
      try {
        const labTest = await fetchLabTests();
        setLabTest(labTest);
        if (labTest.length === 0) {
          setError('No lab tests found');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getLabTests();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color={Colors[colorScheme ?? 'light'].text} />
      </View>
    );
  }

  return (
    <FlatList
      data={labTest}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <HorizontalCard
          title={item.title}
          content={`${item.parameters.length} Tests`}
          onPress={() => {
            navigation.navigate('Laboratory Test Chart', { chart: item });
          }}
          style={styles.card}
        />
      )}
      contentContainerStyle={styles.scrollContainer}
      numColumns={2}
      columnWrapperStyle={styles.row}
    />
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
  card: {
    flex: 1,
    margin: 8,
    height: 120,
  },
});
