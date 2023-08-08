/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Config from 'react-native-config';

const Products = () => {

  const html = Config.API_URL;

  return (
    <SafeAreaView>
      <Text>Products {html} </Text>
    </SafeAreaView>
  );
};

export default Products;
