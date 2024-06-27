import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Alert } from 'react-native';
import { CommonActions } from '@react-navigation/native';

const API_ROOT = process.env.API_ROOT

const login = async (username, password) => {
  const loginData = { username, password };

  try {
    const response = await axios.post(`${API_ROOT}/login/`, loginData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { token, user } = response.data;

    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('user', JSON.stringify(user));

    return { token, user };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const signup = async (username, password, email) => {
  const signupData = { username, password, email };

  try {
    const response = await axios.post(`${API_ROOT}/signup/`, signupData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { token, user } = response.data;
    // console.log(response.data);

    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('user', JSON.stringify(user));
    navigation.dispatch(
      CommonActions.reset({ index: 0 })
    );
  } catch (error) {
    throw error;
  }
};

const removeLocalData = async (navigation) => {
  try {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
    navigation.dispatch(
      CommonActions.reset({ index: 0, routes: [{ name: 'index' }],})
    );
  } catch (error) {
    console.error('Error logging out:', error);
  }
};

const logout = (navigation) => {
  Alert.alert(
    'Confirm Logout',
    'Are you sure you want to log out?',
    [
      { text: 'Cancel', style: 'cancel' },
      { text: 'OK', onPress: () => removeLocalData(navigation) },
    ],
    { cancelable: false }
  );
};

export { login, signup, logout };
