import { StyleSheet, Text, View, } from 'react-native';
import React from 'react'
const App = () => {
  return(
    <View style={{ flex: 1 }}>
    <View style={{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'end', // baris
      justifyContent: 'end', // Kolom

    }}>
      <View style={{
        flex:1,
        backgroundColor: 'red', width: 130, height: 60,
        justifyContent: 'center',
        borderRadius: 10,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 100,
      }}>
        <Text style={{
          fontSize: 20 , color: 'white',
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          login
        </Text>
        </View>
        <View style={{
        flex:1,
        backgroundColor: 'blue', width: 130, height: 60,
        justifyContent: 'center',
        borderRadius: 10,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 100,
      }}>  
        <Text style={{
          fontSize: 20 , color: 'white',
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          Sign up
        </Text>
        </View>
      </View>
      </View>
  )
}
export default App