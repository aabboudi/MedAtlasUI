import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import { VerticalCard } from '@/components/Card'; // Assuming your VerticalCard component is correctly imported
import { RouteProp, useRoute } from '@react-navigation/native';
import medsFetcher from '@/assets/fetchers/medsFetcher';
import { StyleSheet } from 'react-native';

interface Medication {
  title: string;
  description: string;
  // Add more properties as needed based on medsFetcher output
}

type ParamList = {
  Medications: {
    ATCCode: string;
  };
};

const Medications: React.FC = () => {
  const route = useRoute<RouteProp<ParamList, 'Medications'>>();
  const { ATCCode } = route.params;
  const [medications, setMedications] = React.useState<Medication[]>([]);

  React.useEffect(() => {
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
              // Handle onPress action if needed
            }}
            style={{ marginBottom: 10 }} // Optional: Adjust styling as needed
          />
        )}
        keyExtractor={(item, index) => index.toString()} // Assuming medications have unique IDs or indexes
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
