import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet, Pressable } from 'react-native';
import { AuthContext } from '@/assets/fetchers/AuthContext';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const { signUp, loading } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const handleSignup = async () => {
    try {
      setError('');
      await signUp(username, password, email);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      {loading ? (
        <ActivityIndicator style={styles.loader} />
      ) : (
        <Button title="Signup" onPress={handleSignup} />
      )}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Pressable onPress={() => { navigation.navigate('LoginScreen'); }}>
        <Text>Have an account? Log in instead.</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  loader: {
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default SignupScreen;