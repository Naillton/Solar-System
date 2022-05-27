import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './style';

export default btn = () => {
  const [ number, setNumber ] = useState(0);
  const random = () => {
    const rNumber = Math.floor(Math.random() * (1000 - 1 + 1));
    setNumber(rNumber);
  }

  return(
    <View style={ styles.container}>
      <Text style={ styles.random }>{ number }</Text>
      <TouchableOpacity
        onPress={ random }
        style={ styles.touch }
        activeOpacity={ 0.8 }
      >
        <Text>Touch</Text>
      </TouchableOpacity>
    </View>
  );
}