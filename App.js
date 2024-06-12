import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react'
import ButtonCustom from './component/Button/Button'
const App = () => {

  return(
    <View style={{ flex: 1}}>
    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      marginTop:270
    }}>
      <Image
      source={require('./assets/webtoon.png')}
      style={{
        width:160,
        height:150,
        marginBottom: 50,
      }}
      />
    </View>
    <View style={{
      flex:1,
      flexDirection: 'row',
      alignItems:'flex-end',
      justifyContent:'center',
      marginBottom: 100,
    }}
    >
    <ButtonCustom color='blue' text = 'singin'/>
    <ButtonCustom color='green' text = 'Sign up'/>
    
    </View>
    </View>
  )
}
export default App