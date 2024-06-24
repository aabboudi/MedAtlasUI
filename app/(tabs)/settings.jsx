import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView, Text, TouchableOpacity, Switch, Image, Platform } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { useColorScheme } from 'react-native';
import Colors from '@/constants/Colors';

export default function Settings() {
  const [form, setForm] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
  });

  const colorScheme = useColorScheme();
  const styles = AllStyles(Colors, colorScheme);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.profileAvatarWrapper}>
            <Image
              alt=""
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2AKpxPfuPNC40JtEWsT_CkORtEt9aAZB2DA&s',
              }}
              style={styles.profileAvatar}
            />

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.profileAction}>
              <FeatherIcon
                color="#fff"
                name="edit-3"
                size={15}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Dr. Zakaria Mtalai</Text>
            <Text style={styles.profileAddress}>CHU Mohammed VI, Tanger</Text>
          </View>
        </View>

        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preferences</Text>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#fe9400' }]}>
                <FeatherIcon color="#fff" name="globe" size={20} />
              </View>

              <Text style={styles.rowLabel}>Language</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>

            <View style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
                <FeatherIcon color="#fff" name="moon" size={20} />
              </View>

              <Text style={styles.rowLabel}>Dark Mode</Text>

              <View style={styles.rowSpacer} />

              <Switch
                onValueChange={darkMode => setForm({ ...form, darkMode })}
                value={form.darkMode} />
            </View>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#32c759' }]}>
                <FeatherIcon
                  color="#fff"
                  name="navigation"
                  size={20} />
              </View>

              <Text style={styles.rowLabel}>Location</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>

            <View style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
                <FeatherIcon
                  color="#fff"
                  name="at-sign"
                  size={20} />
              </View>

              <Text style={styles.rowLabel}>Email Notifications</Text>

              <View style={styles.rowSpacer} />

              <Switch
                onValueChange={emailNotifications =>
                  setForm({ ...form, emailNotifications })
                }
                value={form.emailNotifications} />
            </View>

            <View style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
                <FeatherIcon color="#fff" name="bell" size={20} />
              </View>

              <Text style={styles.rowLabel}>Push Notifications</Text>

              <View style={styles.rowSpacer} />

              <Switch
                onValueChange={pushNotifications =>
                  setForm({ ...form, pushNotifications })
                }
                value={form.pushNotifications} />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Resources</Text>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#8e8d91' }]}>
                <FeatherIcon color="#fff" name="flag" size={20} />
              </View>

              <Text style={styles.rowLabel}>Report Bug</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
                <FeatherIcon color="#fff" name="mail" size={20} />
              </View>

              <Text style={styles.rowLabel}>Contact Us</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#32c759' }]}>
                <FeatherIcon color="#fff" name="star" size={20} />
              </View>

              <Text style={styles.rowLabel}>Rate in {Platform.OS === 'ios' ? 'App' : 'Play'} Store</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>
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
  /** Row */
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
});
