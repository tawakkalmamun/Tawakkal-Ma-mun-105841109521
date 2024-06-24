import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image,} from 'react-native';
import React, {useState} from 'react';

const CustomButton = ({color, text}) => (
  <View style ={[styles.customButton, {backgroundColor: color}]}>
    <Text style ={styles.customButtonText}>
    {Text}
    </Text>
    </View>
);
const TextInputCustom = ({name, color, value, onChangeText}) => (
<TextInput
placeholder={`Masukkan ${name}`}
style={[styles.customTextInput, {color: color}]}
value={value}
onChangeText={onChangeText}
/>

)
const App = () => {
  const [username, setUsername] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <View style={styles.container}>
      <Text style={styles.title}>SIGN UP</Text>
      <TextInputCustom name="Name" color="black" value={username} onChangeText={setUsername}/>
      <TextInputCustom name="Email" color="black" value={email} onChangeText={setemail}/>
      <TextInputCustom name="Password" color="black" value={password} onChangeText={setPassword}/>
      <View style={styles.accountContainer}>
        <Text style={styles.accountText}> Already have an account?<Text style ={StyleSheet.arrow}>&rarr;</Text></Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SING UP</Text>
        </TouchableOpacity>
    <Text style={styles.signupText}>Or Sing up with social account</Text>
    <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('./assets/goggle.png')}
            style={styles.socialButtonImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('./assets/Fb.png')}
            style={styles.socialButtonImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 60,
  },
  customTextInput: {
    height: 50,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 15,
    paddingLeft: 15,
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  accountContainer: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 5,
  },
  accountText: {
    fontSize: 14,
    color: 'red',
  },
  arrow: {
    fontSize: 20,
    color: 'red',
  },
  signupText: {
    fontSize: 15,
    color: 'blue',
    marginTop: 100,
    marginVertical: 15,
  },
  socialButtons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginHorizontal: 15,
  },
  socialButtonImage: {
    width: 25,
    height: 25,
  },
  customButton: {
    width: 150,
    height: 60,
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 10,
  },
  customButtonText: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default App;
