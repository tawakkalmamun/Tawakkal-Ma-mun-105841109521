import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react'
const App =  () => {
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
    <View style={{
      flex:1,
      backgroundColor: 'red',width: 130, height:60,
      justifyContent: 'center',
      borderRadius:10,
      marginRight:10,
      marginLeft:10
    }}>
      <Text style={{
        fontSize: 20, color: 'white',
        textAlign:'center',
        fontWeight:'bold',
      }}>
        Login
      </Text>
    </View>
    <View style={{
      flex:1,
      backgroundColor: 'blue',width: 130, height:60,
      justifyContent: 'center',
      borderRadius:10,
      marginRight:10,
    }}>
      <Text style={{
        fontSize: 20, color: 'white',
        textAlign:'center',
        fontWeight:'bold',
      }}>
        Sign up
      </Text>
    </View>
    </View>
    </View>
  )
}
export default App