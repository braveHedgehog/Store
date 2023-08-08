/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';


const Login = () => {

    function handleLogin(values){
        console.log(values);
    }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/login_logo.png')}
        />
      </View>
      <Formik initialValues={{username: '', password: ''}} onSubmit={handleLogin} >
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
            />
            <Button text="Giriş Yap" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
