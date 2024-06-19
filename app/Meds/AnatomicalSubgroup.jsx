import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from '@/components/Themed';
import { HorizontalCard } from '@/components/Card';
import atctree from '@/assets/temp_data/atctree.json';

const AnatomicalSubgroup = () => {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const categoriesArray = Object.keys(atctree).map(key => ({
      name: atctree[key].name,
      subcategories: atctree[key].subcategories
    }));
    setCategories(categoriesArray);
  }, []);

  return (
    <FlatList
      data={categories}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <HorizontalCard
          title={item.name}
          onPress={() =>
            navigation.navigate('Therapeutic Subgroup', { subcategories: item.subcategories })
          }
          style={styles.card}
        />
      )}
      contentContainerStyle={styles.scrollContainer}
      numColumns={2}
      columnWrapperStyle={styles.row}
    />
  );
};

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

export default AnatomicalSubgroup;
