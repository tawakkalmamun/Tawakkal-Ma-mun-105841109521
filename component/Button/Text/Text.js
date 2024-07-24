import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomText = ({ text, color, fontSize, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={[styles.text, { color: color, fontSize: fontSize }]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 29,
    marginBottom: 2
  },
  text: {
    fontFamily: 'MetroMedium'
  }
});

export default CustomText;
