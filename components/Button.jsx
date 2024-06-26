import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import Colors from '@/constants/Colors';

const ChevronButton = ({ onPress, iconName, label, bgColor }) => {
  const colorScheme = useColorScheme();
  const styles = AllStyles(Colors, colorScheme);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {navigation.navigate('Settings Details')}}
      activeOpacity={0.75}
      style={styles.row}>
      <View style={[styles.rowIcon, { backgroundColor: bgColor }]}>
        <FeatherIcon color="#fff" name={iconName} size={20} />
      </View>

      <Text style={styles.rowLabel}>{ label }</Text>

      <View style={styles.rowSpacer} />

      <FeatherIcon
        color="#C6C6C6"
        name="chevron-right"
        size={20} />
    </TouchableOpacity>
  );
};

const SwitchButton = ({ iconName, label, form, setForm }) => {
  const colorScheme = useColorScheme();
  const styles = AllStyles(Colors, colorScheme);
  const navigation = useNavigation();

  return (
    <View style={styles.row}>
      <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
        <FeatherIcon color="#fff" name={iconName} size={20} />
      </View>

      <Text style={styles.rowLabel}>{label}</Text>

      <View style={styles.rowSpacer} />

      <Switch
        onValueChange={darkMode => setForm({ ...form, darkMode })}
        value={form.darkMode}
        trackColor={{ true: '#81b0ff', false: '#767577' }}
        thumbColor={form.darkMode ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        // Change colors later
      />
    </View>
  );
};

export { ChevronButton, SwitchButton };

const AllStyles = (Colors, colorScheme) => StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: Colors[colorScheme ?? 'light'].background,
    borderColor: Colors[colorScheme ?? 'light'].textMuted,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '400',
    color: Colors[colorScheme ?? 'light'].text,
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
})