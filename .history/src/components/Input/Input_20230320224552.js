/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({placeHolder, onType, value, iconName, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeHolder} onChangeText={onType} value={value} style={styles.Input} secureTextEntry={isSecure}/>
      <Icon name={iconName} size={25} color="gray" />
    </View>
  );
};

export default Input;
