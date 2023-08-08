/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require('../../assets/login_logo.png')}/>
      </View>
      <View style={styles.body_container}>
      <Input placeHolder="Kullanıcı Adını giriniz" />
        <Input placeHolder="Şifrenizi giriniz" />
        <Button text="Giriş Yap"  />
      </View>
    </SafeAreaView>
  );
};

export default Login;
