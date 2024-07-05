// In App.js in a new project

import * as React from 'react';
import { View, Text , Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'

function HomeScreen({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title = 'Ke Halaman Login' onPress={() => navigation.navigate('LoginPage')}/>
    </View>
  );
}
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
//navigation dan Taskban