import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView, Text, TouchableOpacity, Switch, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logout } from '@/assets/fetchers/AuthHandler'; 

import { ChevronButton, SwitchButton } from '@/components/Button';
import { useColorScheme } from 'react-native';
import Colors from '@/constants/Colors';

export default function SettingsScreen() {
  const [form, setForm] = useState({
    darkMode: false,
  });
  const [userName, setUserName] = useState("John Doe"); // Default name if AsyncStorage is empty
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const styles = AllStyles(Colors, colorScheme);

  useEffect(() => {
    async function loadUserName() {
      try {
        const userString = await AsyncStorage.getItem('user');
        if (userString) {
          const userData = JSON.parse(userString);
          setUserName(userData.username);
        }
      } catch (error) {
        console.error('Error loading user from AsyncStorage:', error);
      }
    }
    loadUserName();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.profileAvatarWrapper}>
            <Image
              alt=""
              source={{
                uri: 'https://media.licdn.com/dms/image/D4E03AQHB7qToKtakHg/profile-displayphoto-shrink_200_200/0/1664966381645?e=2147483647&v=beta&t=7oaujqvXCRO9CQeOQWmnFgoj8NUQv6Hg_TH1o9u2JHE',
              }}
              style={styles.profileAvatar}
            />

            <TouchableOpacity
              onPress={() => { navigation.navigate('modal') }}
              style={styles.profileAction}>
              <FeatherIcon color="#fff" name="edit-3" size={15} />
            </TouchableOpacity>
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Dr. {userName}</Text>
            <Text style={styles.profileAddress}>CHU Mohammed VI, Tanger</Text>
          </View>
        </View>

        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preferences</Text>
            <ChevronButton iconName="globe" label="Language" bgColor='#fe9400' />
            <SwitchButton iconName="moon" label="Dark Mode" form={form} setForm={setForm} />
            <ChevronButton iconName="navigation" label="Location" bgColor='#32c759' />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Resources</Text>
            <ChevronButton iconName="flag" label="Report Bug" bgColor='#8e8d91' />
            <ChevronButton iconName="mail" label="Contact Us" bgColor='#007afe' />
            <ChevronButton iconName="star" label="Rate Us" bgColor='#32c759' />
            <ChevronButton iconName="log-out" label="Log Out" bgColor='#000000'
              onPress={() => { logout(navigation) }}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const AllStyles = (Colors, colorScheme) => StyleSheet.create({
  container: {
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  /** Profile */
  profile: {
    padding: 24,
    flexDirection: 'row',  // Align items horizontally
    alignItems: 'center',  // Center items vertically
    justifyContent: 'space-between',  // Distribute items evenly
  },
  profileAvatarWrapper: {
    position: 'relative',
    marginRight: 20,  // Spacing between avatar and profile info
  },
  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 9999,
  },
  profileAction: {
    position: 'absolute',
    right: -4,
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 9999,
    backgroundColor: '#007bff',
  },
  profileInfo: {
    flex: 1,  // Take remaining space
  },
  profileName: {
    fontSize: 19,
    fontWeight: '600',
    color: Colors[colorScheme ?? 'light'].text,
    textAlign: 'left',  // Align text to the left
  },
  profileAddress: {
    marginTop: 5,
    fontSize: 16,
    color: Colors[colorScheme ?? 'light'].text,
    textAlign: 'left',  // Align text to the left
  },
  
  /** Section */
  section: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: '600',
    color: '#9e9e9e',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
});
