import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import styles from './SecondSlide.style';
import {useDispatch, useSelector} from 'react-redux';
import BoardingButton from '../../../components/Buttons/BoardingButton';

function SecondSlide() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('Slider', {
      screen: 'Third',
    });
  };

  const handleSkip = () => {
    navigation.navigate('Slider', {
      screen: 'Third',
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <View style={styles.img_container}>
          <Image
            source={require('../../../../assets/imgs/second.png')}
            style={styles.img}
          />
        </View>
        <View style={styles.text_container}>
          <Text style={styles.title}>
            Let Us Know {'\n'}
            Where You Are!
          </Text>
          <Text style={styles.subtitle}>
            The Aora app will accurately display {'\n'}
            current weather conditions with no time.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <BoardingButton
              text="SKIP"
              theme="secondary"
              onPress={handleSkip}
            />
            <BoardingButton text="NEXT" onPress={handleNext} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SecondSlide;
