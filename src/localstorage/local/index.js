import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeData = async (key,value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
  }
}


export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if(value !== null) {
      return JSON.parse(value);
    }
  } catch(e) {
    // error reading value
  }
}

export const RegisterURL = 'https://adic.okeadmin.com/api/register';
export const LoginURL = 'http://10.255.7.246/adic/api/login';
export  const MYAPP = 'ADIC'; 