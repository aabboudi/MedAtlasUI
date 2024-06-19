// AnatomicalSubgroup.tsx

import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from '@/components/Themed';
import { HorizontalCard } from '@/components/Card';
import atctree from '@/assets/temp_data/atctree.json';

interface Subcategories {
  [key: string]: string;
}

interface Category {
  name: string;
  subcategories: Subcategories;
}

const AnatomicalSubgroup = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    const categoriesArray: Category[] = Object.keys(atctree).map(key => ({
      name: atctree[key as keyof typeof atctree].name,
      subcategories: atctree[key as keyof typeof atctree].subcategories
    }));
    setCategories(categoriesArray);
  }, []);

  const navigateToTherapeuticSubgroup = (subcategories: Subcategories) => {
    navigation.navigate('Therapeutic Subgroup', { subcategories });
  };

  return (
    <FlatList
      data={categories}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <HorizontalCard
          title={item.name}
          onPress={() => navigateToTherapeuticSubgroup(item.subcategories)}
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
