import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../../assets/colors/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inner_container: {
    flex: 1,
    margin: 20,
  },
  img_container: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 275,
    width: Dimensions.get('window').width / 1.5,
  },
  text_container: {
    flex: 0.5,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontFamily: 'SourceSansPro-Black',
    color: colors.darkBlue,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'SourceSansPro-Medium',
    color: colors.gray,
    textAlign: 'center',
  },
  btn: {
    height: 50,
    width: Dimensions.get('window').width / 1.5,
    alignItems: 'center',
    marginTop: 35,
    backgroundColor: colors.darkPurple,
    borderRadius: 10,
    justifyContent: 'center',

    elevation: 5,
  },
  btn_text: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'SourceSansPro-SemiBold',
  },
  input_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    width: Dimensions.get('window').width / 1.7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: colors.darkPurple,
  },
});
