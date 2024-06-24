import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import SearchBar from '@/components/SearchBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { VerticalCard } from '@/components/Card'; 
import topicsData from '@/assets/temp_data/topicsData.json';
import atcTree from '@/assets/temp_data/atctree.json';

import globalStyles from '@/assets/styles/styles';

const SearchStack = createNativeStackNavigator();

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [combinedData, setCombinedData] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const navigation = useNavigation();
  const styles = globalStyles();

  useEffect(() => {
    const loadAllData = () => {
      const flattenedAtcTree = flattenAtcTree(atcTree);
      const combined = [
        // ...topicsData.map(item => ({ ...item, type: 'Topic', searchKey: item.name })),
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
      // console.log(tree[key]['subcategories']);
      const category = tree[key];
      flattened.push({ type: 'Anatomical Subgroup', carryOver: key, searchKey: category.name });
      Object.keys(category.subcategories).forEach((subKey) => {
        flattened.push({ type: 'Therapeutic Subgroup', carryOver: subKey, searchKey: category.subcategories[subKey] });
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
              content={item.type}
              onPress={() => {
                if (item.type === 'Anatomical Subgroup') {
                  console.log(`${item.type} navigating to Therapeutic Subgroup with ${ item.carryOver }`);
                  // console.log(JSON.stringify(atcTree, null, 2));
                  // navigation.navigate('Therapeutic Subgroup', { subcategories: atcTree[item.carryOver]['subcategories'] });
                  navigation.navigate('MedsNavigator', {screen: 'Therapeutic Subgroup', params: { subcategories: atcTree[item.carryOver]['subcategories'], AnatSubg: item.searchKey }});
                } else if (item.type === 'Therapeutic Subgroup') {
                  console.log(`${item.type} navigating to Medication with ${ item.carryOver }`);
                  // navigation.navigate('Medications', { ATCCode: item.carryOver });
                  navigation.navigate('MedsNavigator', {screen: 'Medications', params: { ATCCode: item.carryOver, ATCName: item.searchKey }});
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
