import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const SearchBar = ({ placeholder, onChangeText, searchQuery }) => {
  return (
    <View style={styles.searchSection}>
      <Icon name="search" size={25} color="#000" style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#000"
        onChangeText={onChangeText}
        value={searchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 0.02 * screenHeight, 
    padding: 0.01 * screenHeight, 
    alignItems: 'center',
    marginBottom: 0.02 * screenHeight, 
    marginTop: 0.08 * screenHeight,
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
