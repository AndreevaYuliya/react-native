import AsyncStorage from '@react-native-async-storage/async-storage';

// Storing object value

export const storeData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);

    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

// Reading object value

export const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);

    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

// Deleting data

export const deleteData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // error reading value
  }
};

// Storing string value
// const storeData = async (value) => {
//     try {
//       await AsyncStorage.setItem('my-key', value);
//     } catch (e) {
//       // saving error
//     }
//   };

// Reading string value
// const getData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('my-key');
//       if (value !== null) {
//         // value previously stored
//       }
//     } catch (e) {
//       // error reading value
//     }
//   };
