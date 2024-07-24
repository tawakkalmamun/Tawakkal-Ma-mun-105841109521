import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const ButtonCustom = ({ color, text, onPress, borderColor = 'white', borderWidth = 1 }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: color,
          borderColor: borderColor,
          borderWidth: borderWidth,
        },
      ]}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 260,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 10,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ButtonCustom;