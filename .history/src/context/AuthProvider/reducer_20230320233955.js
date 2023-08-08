/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function reducers(state, action) {
  switch (action.type) {
    case 'SET_USER':
      const {user} = action.payload;
      AsyncStorage.setItem('@USER', );
      return {...state, user};

    default:
      return state;
  }
}
