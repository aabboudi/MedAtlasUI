import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signup } from '@/assets/fetchers/AuthHandler';
import globalStyles from '@/assets/styles/styles';

const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const styles = globalStyles();

  const handleSignup = async () => {
    setLoading(true);

    try {
      setError('');
      await signup(username, password, email);
      navigation.navigate('(tabs)', {screen: 'Home'});
    } catch (error) {
      console.error('Signup Error:', error.message);
      setError(error.message);
    } finally {
      setUsername('');
      setPassword('');
      setEmail('');
      setLoading(false);
    }
  };

  return (
    <View style={[styles.container, {justifyContent: 'center', padding: 40}]}>
      <Text style={[styles.title, {marginBottom: 20}]}>Sign Up</Text>
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
        secureTextEntry={true}
        autoCapitalize="none"
        autoCompleteType="password"
        autoCorrect={false}
      />
      <TextInput
        style={[styles.input, localStyles.spacer]}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCompleteType="email"
        autoCorrect={false}
      />
      {loading ? (
        <ActivityIndicator style={styles.loader} />
      ) : (
        <Button style={{borderWidth: 1, borderColor: 'blue'}} title="Create account" onPress={handleSignup} />
      )}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Pressable onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={[styles.textMuted, {marginTop: 20,}]}>
          Have an account?
          <Text style={[styles.text, {fontWeight: 'bold'}]}> Log in</Text>.
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

export default SignupScreen;
