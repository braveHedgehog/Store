/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {},
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
  },
  body_container: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    fontStyle: 'italic',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 22,
  },
});
