/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, View, Image, Alert} from 'react-native';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';
import usePost from '../../hooks/usePost';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const {data, loading, post, error} = usePost();
  const dispatch = useDispatch();

  function handleLogin(values) {
    post(Config.API_AUT_URL + '/login', values);
  }

  if (error) {
    Alert.alert('Dükkan', 'Bir hata oluştu');
  }

  if (data) {
    if (data.status === 'Error') {
      Alert.alert('Dükkan', 'kullanıcı bulunamadı');
    } else {
      dispatch({type: 'SET_USER', payload: {user}});
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/login_logo.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeHolder="Kullanıcı Adını giriniz"
              value={values.username}
              onType={handleChange('username')}
              iconName="account"
            />
            <Input
              placeHolder="Şifrenizi giriniz"
              value={values.password}
              onType={handleChange('password')}
              iconName="key"
              isSecure
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;

const user = {
  username: 'jhond',
  password: 'm38rmF$',
};
