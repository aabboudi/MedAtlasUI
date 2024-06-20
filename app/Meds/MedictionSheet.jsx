import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

const MedicationSheet = () => {
  const route = useRoute();
  const { medication } = route.params;


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{medication.title}</Text>
      {medication.Presentation && <Text style={styles.text}>Présentation: {medication.Presentation}</Text>}
      {medication.Dosage && <Text style={styles.text}>Dosage: {medication.Dosage}</Text>}
      {medication.Princeps && <Text style={styles.text}>Princeps: {medication.Princeps}</Text>}
      {medication.Distributeur_ou_fabriquant && <Text style={styles.text}>Distributeur ou Fabriquant: {medication.Distributeur_ou_fabriquant}</Text>}
      {medication.Composition && <Text style={styles.text}>Composition: {medication.Composition}</Text>}
      {medication.Classe_thérapeutique && <Text style={styles.text}>Classe Thérapeutique: {medication.Classe_thérapeutique}</Text>}
      {medication.Statut && <Text style={styles.text}>Statut: {medication.Statut}</Text>}
      {medication.Code_ATC && <Text style={styles.text}>Code ATC: {medication.Code_ATC}</Text>}
      {medication.PPV && <Text style={styles.text}>PPV: {medication.PPV}</Text>}
      {medication.Prix_hospitalier && <Text style={styles.text}>Prix Hospitalier: {medication.Prix_hospitalier}</Text>}
      {medication.Tableau && <Text style={styles.text}>Tableau: {medication.Tableau}</Text>}
      {medication.Indications && <Text style={styles.text}>Indications: {medication.Indications}</Text>}
      {medication.Mises_en_garde && <Text style={styles.text}>Mises en Garde: {medication.Mises_en_garde}</Text>}
      {medication.Contres_indications && <Text style={styles.text}>Contres-indications: {medication.Contres_indications}</Text>}
      {medication.Posologies_et_mode_d_administration && <Text style={styles.text}>Posologies et Mode d'Administration: {medication.Posologies_et_mode_d_administration}</Text>}
      {medication.Substances_psychoactives && <Text style={styles.text}>Substances Psychoactives: {medication.Substances_psychoactives}</Text>}
      {medication.Risque_potentiel_de_dépendance_ou_d_abus && <Text style={styles.text}>Risque Potentiel de Dépendance ou d'Abus: {medication.Risque_potentiel_de_dépendance_ou_d_abus}</Text>}
      {medication.Nature_du_Produit && <Text style={styles.text}>Nature du Produit: {medication.Nature_du_Produit}</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
    textAlign: 'center',
    color: 'white',
  },
});

export default MedicationSheet;
