import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

const handlePress = () => {
  Alert.alert('Button Pressed');
};

const MedicationSheet = () => {
  const route = useRoute();
  const { medication } = route.params;
  const colorScheme = useColorScheme();
  const styles = AllStyles(Colors, colorScheme);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{medication.title}</Text>

      <View style={styles.table}>
        <View style={[styles.cell, styles.cellLeft]}>
          {medication.Présentation && <Text style={styles.text}>{medication.Présentation}</Text>}
        </View>
        <View style={[styles.cell, styles.Right]}>
          {medication.Dosage && <Text style={styles.text}>{medication.Dosage}</Text>}
        </View>
      </View>

      

      <View style={styles.separator} lightColor="#ccc" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.text}>{medication.Classe_thérapeutique} {'>'} {medication.Composition} ({medication.Code_ATC})</Text>

      <View style={styles.separator} lightColor="#ccc" darkColor="rgba(255,255,255,0.1)" />

      {medication.PPV && <View style={styles.rectangle}>
        <Text style={[styles.text, {color: 'white'}]}>{medication.PPV.slice(0, -4)} DH</Text>
      </View>}

      {medication.Nature_du_Produit && <Text style={styles.text}>{medication.Nature_du_Produit}</Text>}

      <Button
        title={`${medication.Nature_du_Produit ? medication.Nature_du_Produit + ' Similaire' : 'Medicaments Similaires'}`}
        onPress={handlePress}
        color="green"
      />
      {/* {medication.Prix_hospitalier && <Text style={styles.text}>Prix Hospitalier: {medication.Prix_hospitalier}</Text>} */}

      <View style={styles.separator} lightColor="#ccc" darkColor="rgba(255,255,255,0.1)" />

      {medication.Princeps && <Text style={styles.text}>Princeps: {medication.Princeps}</Text>}
      {medication.Tableau && <Text style={styles.text}>Tableau: {medication.Tableau}</Text>}
      {medication.Indications && <Text style={styles.text}>Indications: {medication.Indications}</Text>}
      {medication.Mises_en_garde && <Text style={styles.text}>Mises en Garde: {medication.Mises_en_garde}</Text>}
      {medication.Contres_indications && <Text style={styles.text}>Contres-indications: {medication.Contres_indications}</Text>}
      {medication.Posologies_et_mode_d_administration && <Text style={styles.text}>Posologies et Mode d'Administration: {medication.Posologies_et_mode_d_administration}</Text>}
      {medication.Substances_psychoactives && <Text style={styles.text}>Substances Psychoactives: {medication.Substances_psychoactives}</Text>}
      {medication.Risque_potentiel_de_dépendance_ou_d_abus && <Text style={styles.text}>Risque Potentiel de Dépendance ou d'Abus: {medication.Risque_potentiel_de_dépendance_ou_d_abus}</Text>}
    </ScrollView>
  );
};

const AllStyles = (Colors, colorScheme) => StyleSheet.create({
  container: {
    flexGrow: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: Colors[colorScheme ?? 'light'].text,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
    textAlign: 'center',
    color: Colors[colorScheme ?? 'light'].text,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
  rectangle: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#004f98',
  },
  table: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors[colorScheme ?? 'light'].text,
    borderRadius: 8,
  },
  cell: {
    flex: 1,
    padding: 10,
    borderColor: Colors[colorScheme ?? 'light'].text,
  },
  cellLeft: {
    borderRightWidth: 1,
  },
  cellRight: {
    borderLeftWidth: 1,
  },
});

export default MedicationSheet;
