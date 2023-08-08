/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import {REACT_APP_API_URL} from '@react-native-community/eslint-config';
import axios from 'axios';

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const {uData} = await axios.get({REACT_APP_API_URL});
    setData(data);
  };

  const renderProduct = ({item}) => <Text>{item.title}</Text>;

  return (
    <SafeAreaView>
      <FlatList data={null} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
