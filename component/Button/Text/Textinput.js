import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react'

  const TextInputCustom = ({ name, color}) => {
  return(
      <TextInput
      placeholder={`Masukkan ${name}`}
      style={{
        height:40, 
        width:200,
        borderColor: 'Gray',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom:  10,
        paddingLeft: 10,
        color: color,
      }}
      />
    )
  }
  export default TextInputCustom