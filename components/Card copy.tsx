import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';

import Colors from '@/constants/Colors';

interface CardProps {
  title: string;
  children: string;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle} lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
        {title}
      </Text>
      {/* <View style={styles.cardContent}>
        {children}
      </View> */}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.dark.background,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  cardContent: {
    paddingHorizontal: 5,
  },
});
