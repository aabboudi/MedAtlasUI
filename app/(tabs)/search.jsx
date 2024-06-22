import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import SearchBar from '@/components/SearchBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { VerticalCard } from '@/components/Card'; 
import topicsData from '@/assets/temp_data/topicsData.json';
import atcTree from '@/assets/temp_data/atctree.json';

import styles from '@/assets/styles/styles';

const SearchStack = createNativeStackNavigator();

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [combinedData, setCombinedData] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadAllData = () => {
      const flattenedAtcTree = flattenAtcTree(atcTree);
      const combined = [
        ...topicsData.map(item => ({ ...item, type: 'Topic', searchKey: item.name })),
        ...flattenedAtcTree
      ];
      setCombinedData(combined);
    };
    loadAllData();
  }, []);

  const handleSearchTextChange = (text) => {
    setSearchQuery(text.toLowerCase());
  };

  const handleSearchSubmit = () => {
    if (searchQuery && !searchHistory.includes(searchQuery)) {
      setSearchHistory([searchQuery, ...searchHistory]);
    }
  };

  const handleHistoryItemPress = (query) => {
    setSearchQuery(query);
  };

  const flattenAtcTree = (tree) => {
    const flattened = [];
    Object.keys(tree).forEach((key) => {
      const category = tree[key];
      flattened.push({ type: 'ATC Category', searchKey: category.name });
      Object.keys(category.subcategories).forEach((subKey) => {
        flattened.push({ type: 'ATC Subcategory', searchKey: category.subcategories[subKey] });
      });
    });
    return flattened;
  };

  const filteredData = combinedData.filter(item =>
    item.searchKey.toLowerCase().includes(searchQuery)
  );

  return (
    <View style={styles.container}>
      <SearchBar 
        placeholder="Search everything..."
        onChangeText={handleSearchTextChange}
        value={searchQuery}
        onSubmitEditing={handleSearchSubmit}
      />
      <View style={styles.historyContainer}>
        {searchHistory.map((query, index) => (
          <TouchableOpacity key={index} onPress={() => handleHistoryItemPress(query)}>
            <Text style={styles.historyItem}>{query}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {searchQuery ? (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {filteredData.map((item, index) => (
            <VerticalCard
              key={index}
              title={item.searchKey}
              onPress={() => {
                if (item.type === 'Anatomical Subgroup') {
                  navigation.navigate('AnatomicalSubgroup', { item });
                } else if (item.type === 'Therapeutic Subgroup') {
                  navigation.navigate('TherapeuticSubgroup', { item });
                } else if (item.type === 'Topic') {
                  navigation.navigate('Medications', { item });
                }
              }}
            />
          ))}
        </ScrollView>
      ) : (
        <Text style={localStyles.placeholderText}>Start typing to search...</Text>
      )}
    </View>
  );
}


const localStyles = StyleSheet.create({
  placeholderText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  }
});
