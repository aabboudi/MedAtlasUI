import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

const { width, height } = Dimensions.get('window');
const vh = height / 100;
const vw = width / 100;

const HorizontalCard = ({ title, content, onPress, style }) => {
  const colorScheme = useColorScheme();
  const textColor = Colors[colorScheme ?? 'light'].background;

  return (
    <TouchableOpacity style={[styles.horizontalCard, style]} onPress={onPress} activeOpacity={0.75}>
      <View style={styles.cardContent}>
        <View style={styles.textContent}>
          {title && <Text style={styles.horizontalTitle}>{title}</Text>}
          {content && <Text style={styles.desc}>{content}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const VerticalCard = ({ title, content, onPress, style }) => {
  const colorScheme = useColorScheme();
  const textColor = Colors[colorScheme ?? 'light'].text;

  return (
    <TouchableOpacity style={[styles.verticalCard, style]} onPress={onPress} activeOpacity={0.75}>
      <View style={styles.cardContent}>
        <View style={styles.textContent}>
          {title && <Text style={[styles.verticalTitle, { color: textColor }]}>{title}</Text>}
          {content && <Text style={[styles.verticalDesc, { color: textColor }]}>{content}</Text>}
        </View>
        <Icon name="chevron-right" size={30} color="#4A90E2" style={styles.arrowIcon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  horizontalCard: {
    width: 30 * vw,
    height: 8 * vh,
    margin: 1 * vh,
    padding: .5 * vh,
    backgroundColor: '#004F98',
    borderRadius: 1 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
  },
  verticalCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // width: 85 * vw,
    maxWidth: 100 * vw - 40,
    minHeight: 11 * vh,
    padding: 8,
    // marginHorizontal: 1.3 * vw,
    marginVertical: 1 * vh,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#333',
  },
  horizontalTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  verticalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  desc: {
    fontSize: 10,
    color: '#fff',
    textAlign: 'center',
  },
  verticalDesc: {
    fontSize: 14,
    color: '#333',
    textAlign: 'left',
    marginTop: 5,
  },
  textContent: {
    flex: 1,
    margin: 1.2 * vh,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  arrowIcon: {
    marginLeft: 10,
  },
});

export { HorizontalCard, VerticalCard };
