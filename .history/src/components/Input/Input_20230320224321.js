/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({placeHolder, onType, value}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeHolder} onChangeText={onType} value={value} style={styles.Input} />
      <Icon name="account" size={30} />
    </View>
  );
};

export default Input;
