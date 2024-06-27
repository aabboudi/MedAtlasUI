import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const WelcomeScreen = () => {
    const navigation = useNavigation();
  const goToLogin = () => {
    navigation.navigate('LoginScreen');
  };

  const goToSignUp = () => {
    navigation.navigate('SignupScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/MedAtlas_logo.png')} style={styles.logo} />
      <Text style={styles.title}>Something or other</Text>
      <TouchableOpacity style={styles.button} onPress={goToLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#0c2545',
  },
  button: {
    backgroundColor: '#0c2545',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default WelcomeScreen;
