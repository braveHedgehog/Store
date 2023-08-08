/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Input placeHolder="Kullanıcı Adını giriniz" />
        <Input placeHolder="Şifrenizi giriniz" />
        <Button text="Giriş Yap" />
      </View>
      <View style={styles.body_container}>
        <Text>Dükkan</Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
