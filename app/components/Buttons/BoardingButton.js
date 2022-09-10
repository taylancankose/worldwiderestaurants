import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './BoardingButton.style';

function BoardingButton({text, disabled, onPress, theme = 'primary'}) {
  return (
    <View style={styles[theme].btn_container}>
      <TouchableOpacity
        style={styles[theme].btn}
        onPress={onPress}
        disabled={disabled}>
        <Text style={styles[theme].text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BoardingButton;
