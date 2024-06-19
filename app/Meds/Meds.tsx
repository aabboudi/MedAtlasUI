import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { Text, View } from '@/components/Themed';
import { HorizontalCard } from '@/components/Card'; // Assuming your Card component is correctly imported

// Import your JSON data (replace with correct path)
import atctree from '@/assets/temp_data/atctree.json';

// Define the type of your JSON structure
interface Subcategories {
  [key: string]: string;
}

interface Category {
  name: string;
  subcategories: Subcategories;
}

export default function Meds() {
  const [categories, setCategories] = useState<Category[]>([]); // State to hold categories
  const navigation = useNavigation(); // Initialize navigation

  useEffect(() => {
    // Convert JSON object into array of categories
    const categoriesArray: Category[] = Object.keys(atctree).map(key => ({
      name: atctree[key as keyof typeof atctree].name,
      subcategories: atctree[key as keyof typeof atctree].subcategories
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
          onPress={() => {
            // navigation.navigate('MedsSubCategory', { category: item }); // Navigate to SubcategoriesScreen with category data
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
