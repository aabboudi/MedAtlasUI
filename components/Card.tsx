import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const vh = height / 100;
const vw = width / 100;

interface CardProps {
  type: 'vertical' | 'horizontal';
  title?: string;
  content?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const Card: React.FC<CardProps> = ({ type, title, content, onPress, style }) => {
  const cardStyle = type === 'vertical' ? styles.verticalCard : (style || styles.horizontalCardTopics);
  const titleStyle = type === 'vertical' ? styles.verticalTitle : styles.horizontalTitle;
  const descStyle = type === 'vertical' ? styles.verticalDesc : styles.desc;

  return (
    <TouchableOpacity style={cardStyle} onPress={onPress} activeOpacity={0.75}>
      <View style={styles.cardContent}>
        <View style={styles.textContent}>
          {title && <Text style={titleStyle}>{title}</Text>}
          {content && <Text style={descStyle}>{content}</Text>}
        </View>
        {type === 'vertical' && (
          <Icon name="chevron-right" size={30} color="#4A90E2" style={styles.arrowIcon} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  horizontalCardTopics: {
    width: 30 * vw,
    height: 8 * vh,
    maxHeight: 10,
    margin: 1 * vh,
    padding: 1 * vh,
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
    width: 85 * vw,
    maxWidth: 100*vw - 40,
    height: 11 * vh,
    padding: 8,
    marginHorizontal: 1.3 * vw,
    marginVertical: 1 * vh,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: { height: 0.2 * vh, width: 0 },
    elevation: 4,
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
    color: '#333',
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

export default Card;
