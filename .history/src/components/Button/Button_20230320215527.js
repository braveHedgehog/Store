/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Button.style';

const Button = ({text}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <Text style={styles.title}></Text>
    </TouchableOpacity>
  );
};

export default Button;
