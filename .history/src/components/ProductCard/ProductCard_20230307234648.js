/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{url: product.image}}/>
        <View style={styles.body_container}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price} TL</Text>
        </View>
    </View>
  );
};
