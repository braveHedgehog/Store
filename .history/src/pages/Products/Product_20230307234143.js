/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import Config from 'react-native-config';

const Products = () => {

  const renderProduct = ({item}) => null;

  return (
    <SafeAreaView>
      <FlatList data={null} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
