import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { login } from '@/assets/fetchers/AuthHandler';
import globalStyles from '@/assets/styles/styles';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const styles = globalStyles();

  const handleLogin = async () => {
    setLoading(true);
    try {
      setError('');
      await login(username, password);
      navigation.navigate('(tabs)', {screen: 'Home'});
    } catch (error) {
      setError(error.message);
    } finally {
      setUsername('');
      setPassword('');
      setLoading(false);
    }
  };

  return (
    <View style={[styles.container, {justifyContent: 'center', padding: 40}]}>
      <Text style={[styles.title, {marginBottom: 20}]}>Login</Text>
      <TextInput
        style={[styles.input, localStyles.spacer]}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={[styles.input, localStyles.spacer]}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {loading ? (
        <ActivityIndicator style={styles.loader} />
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Pressable onPress={() => { navigation.navigate('SignupScreen'); }}>
        <Text style={[styles.textMuted, {marginTop: 20,}]}>
        Don't have an account?
          <Text style={[styles.text, {fontWeight: 'bold'}]}> Create one</Text>.
        </Text>
      </Pressable>
    </View>
  );
};

const localStyles = StyleSheet.create({
  spacer: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default LoginScreen;
