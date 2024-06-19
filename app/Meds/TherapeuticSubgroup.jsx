import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { VerticalCard } from '@/components/Card';
import { useNavigation } from '@react-navigation/native';

const TherapeuticSubgroup = () => {
  const route = useRoute();
  const { subcategories } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.keys(subcategories).map(key => ({ key, value: subcategories[key] }))}
        renderItem={({ item }) => (
          <VerticalCard
            title={item.key}
            content={item.value}
            onPress={() => 
              navigation.navigate('Medications', { ATCCode: item.key })
            }
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
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});

export default TherapeuticSubgroup;
