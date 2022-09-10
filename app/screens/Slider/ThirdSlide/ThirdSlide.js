import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './ThirdSlide.style';
import {useDispatch, useSelector} from 'react-redux';
import BoardingButton from '../../../components/Buttons/BoardingButton';
import {TextInput} from 'react-native-gesture-handler';
import {setLocation} from '../../../redux/restaurantSlice';

function ThirdSlide() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleNext = () => {
    navigation.navigate('Home');
  };
  const city = useSelector(state => state.restaurants.city);
  const onChange = text => {
    dispatch(setLocation(text));
  };
  console.log(city);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.inner_container}
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View style={styles.img_container}>
          <Image
            source={require('../../../../assets/imgs/third.png')}
            style={styles.img}
          />
        </View>
        <View style={styles.text_container}>
          <Text style={styles.title}>
            We Need To Know {'\n'}
            Where You Are
          </Text>
          <Text style={styles.subtitle}>
            To list best places for you {'\n'}
            please share your location with us.
          </Text>
          <View style={styles.input_container}>
            <TextInput
              placeholder="Enter your city"
              style={styles.input}
              onChangeText={onChange}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <BoardingButton
            theme="third"
            text="LET'S START"
            onPress={handleNext}
            disabled={city !== '' ? false : true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ThirdSlide;
