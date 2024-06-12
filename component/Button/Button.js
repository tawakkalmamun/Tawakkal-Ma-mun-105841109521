import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react'
const ButtonCostum =  ({color, text}) => {
    return(
      <View style={{
        flex:1,
        backgroundColor: color,
        width: 130, 
        height:60,
        justifyContent: 'center',
        borderRadius:10,
        marginRight:10,
        marginLeft:10
      }}>
        <Text style={{
          fontSize: 20, 
          color: 'white',
          textAlign:'center',
          fontWeight:'bold',
        }}>
          {text}
        </Text>
      </View>
      )
  }
 export default ButtonCostum