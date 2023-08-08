/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    [];
  });

  const fetchData = () => {
    axios.get(Config.API_URL);
  };

  const renderProduct = ({item}) => null;

  return (
    <SafeAreaView>
      <FlatList data={null} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
