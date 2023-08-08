/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.styles';

const Input = ({placeHolder}) => {
  return (
    <View style={styles.container}>
      <TextInput />
    </View>
  );
};

export default Input;
