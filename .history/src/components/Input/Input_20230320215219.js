/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.styles';

const Input = ({placeHolder, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeHolder} onChangeText={onChangeText} />
    </View>
  );
};

export default Input;
