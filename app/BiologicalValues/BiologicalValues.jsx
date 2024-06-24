import { StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { VerticalCard } from '@/components/Card';

import biologicalValuesData from '@/assets/temp_data/biologicalValuesData.json';
import { useNavigation } from '@react-navigation/native';

export default function BiologicalValues() {
  const navigation=useNavigation();

  return (
    <View style={styles.container}>
    {/* <Text style={[styles.title, {textAlign: 'center', marginBottom: 10, marginHorizontal: 10}]}>TEST</Text> */}
    <FlatList
      data={biologicalValuesData}
      renderItem={({ item }) => (
        <VerticalCard
          title={item.name}
          content={item.importance}
          onPress={() => {
            navigation.navigate('Biological Chart', { chart: item });
          }}
          style={{ marginBottom: 10 }}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
