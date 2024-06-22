import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const SearchBar = ({ placeholder, onChangeText, searchQuery }) => {
  const colorScheme = useColorScheme();
  return (
    <View style={[styles.searchSection, {
      backgroundColor: Colors[colorScheme ?? 'light'].background,
      borderWidth: 1,
      borderColor: Colors[colorScheme ?? 'light'].text,
      }]}>
      <Icon name="search" size={25} color={Colors[colorScheme ?? 'light'].text} style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors[colorScheme ?? 'light'].text}
        onChangeText={onChangeText}
        value={searchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    borderRadius: 16, 
    padding: 0.01 * screenHeight, 
    alignItems: 'center',
    marginBottom: 0.02 * screenHeight, 
    // marginTop: 0.08 * screenHeight,
    marginHorizontal: 20,
  },
  searchIcon: {
    marginRight: 0.025 * screenWidth, 
  },
  input: {
    flex: 1,
    padding: 0.01 * screenHeight, 
    fontSize: 0.02 * screenHeight, 
  }
});

export default SearchBar;
