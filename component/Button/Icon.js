import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const Icon = ({ imageSource, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={imageSource} style={styles.icon} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
    margin: 5,
  },
});

export default Icon;
