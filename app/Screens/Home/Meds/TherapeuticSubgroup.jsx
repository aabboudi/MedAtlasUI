import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { VerticalCard } from '@/components/Card';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '@/assets/styles/styles';

const TherapeuticSubgroup = () => {
  const route = useRoute();
  const { subcategories, AnatSubg } = route.params;
  const navigation = useNavigation();
  const styles = globalStyles();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: AnatSubg.toUpperCase(),
    });
  }, [navigation, AnatSubg]);

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.keys(subcategories).map(key => ({ key, value: subcategories[key] }))}
        // ListHeaderComponent={() => (
        //   <Text style={styles.pageHeader}>{ AnatSubg }</Text>
        // )}
        renderItem={({ item }) => (
          <VerticalCard
            title={item.key}
            content={item.value}
            onPress={() => 
              navigation.navigate('Medications', { ATCCode: item.key, ATCName: item.value })
            }
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default TherapeuticSubgroup;
