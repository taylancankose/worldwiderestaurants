import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

const base_style = StyleSheet.create({
  btn_container: {
    flex: 1,
    margin: 10,
    justifyContent: 'flex-end',
  },
  btn: {
    width: 150,
    height: 70,
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '800',
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    btn: {
      ...base_style.btn,
      backgroundColor: colors.darkBlue,
    },
    text: {
      ...base_style.text,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    btn: {
      ...base_style.btn,
      borderColor: colors.darkBlue,
      borderWidth: 3,
    },
    text: {
      ...base_style.text,
      color: colors.darkBlue,
    },
  }),
  third: StyleSheet.create({
    ...base_style,
    btn: {
      ...base_style.btn,
      width: 300,
      backgroundColor: colors.darkBlue,
    },
    text: {
      ...base_style.text,
      color: 'white',
    },
  }),
};
