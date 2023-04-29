import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AsyncStorage } from 'react-native';

export const startSession = async (user:any) => {
  try {
    await AsyncStorage.setItem('email', user.email);
    await AsyncStorage.setItem('accessToken', user.accessToken);
  } catch (error) {
    console.error(error);
  }
}

export const getSession = async () => {
  try {
    const email = await AsyncStorage.getItem('email');
    const accessToken = await AsyncStorage.getItem('accessToken');
    return {
      email,
      accessToken,
    };
  } catch (error) {
    console.error(error);
  }
}

export const endSession = async () => {
  try {
    await AsyncStorage.removeItem('email');
    await AsyncStorage.removeItem('accessToken');
  } catch (error) {
    console.error(error);
  }
}

export const isLoggedIn = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    return accessToken !== null;
  } catch (error) {
    console.error(error);
  }
}