/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.styles';

const Input = ({placeHolder, onType, value}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeHolder} onChangeText={onType} value={value} />
    </View>
  );
};

export default Input;
