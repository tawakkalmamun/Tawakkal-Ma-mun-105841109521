import { StyleSheet, TextInput } from 'react-native';
import React from 'react';

const TextInputCustom = ({ name, color }) => {
  return (
    <TextInput
      placeholder={`Masukkan ${name}`}
      style={[
        styles.input,
        { color: color }
      ]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
  }
});

export default TextInputCustom;
