/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Detail.style';

const Detail = ({route}) => {

  const {id} =route.params;
  console.log(id);

  return (
    <View style={styles.container}>
      <Image style={styles.image} />
      <Text style={styles.title}></Text>
      <Text style={styles.desc}></Text>
      <Text style={styles.price}></Text>
    </View>
  );
};

export default Detail;
