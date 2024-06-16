import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { Text, View } from '@/components/Themed';
import Card from '@/components/Card'; // Assuming your Card component is correctly imported

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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {categories.map((category, index) => (
          <Card
            key={index}
            type="horizontal" // Use horizontal type for the Card component
            title={category.name}
            content={Object.values(category.subcategories).join(", ")}
            onPress={() => {
              // navigation.navigate('MedsSubCategory', { category }); // Navigate to SubcategoriesScreen with category data
            }}
            style={styles.card}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    marginBottom: 16,
  },
  // Define any other styles you need here
});
