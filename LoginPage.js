import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';

const TextInputCustom = ({ name, color, value, onChangeText }) => (
  <TextInput
    placeholder={name}
    style={[styles.customTextInput, { color: color }]}
    value={value}
    onChangeText={onChangeText}
  />
);

const App = () => {
  const [dapatFont] = useFonts({
    'MetroBlack': require('./assets/fonts/Metropolis-Black.otf'),
    'MetroBold': require('./assets/fonts/Metropolis-Bold.otf'),
    'MetroLight': require('./assets/fonts/Metropolis-Light.otf'),
    'MetroMedium': require('./assets/fonts/Metropolis-Medium.otf'),
    'MetroSemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isForgotPasswordVisible, setIsForgotPasswordVisible] = useState(false);

  const handleForgotPassword = () => {
    setIsForgotPasswordVisible(true);
  };
  const handleSendEmail = () => { 
    // Implementasi pengiriman email reset password
  };
  const handleBackPress = () => { 
    setIsForgotPasswordVisible(false);
  };

  if (!dapatFont) {
    return <Text>Font tidak ditemukan ...</Text>;
  }

  return (
    <View style={styles.container}>
      {isForgotPasswordVisible ? (
        <>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Text style={styles.backButtonText}>&larr;</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Forgot Password</Text>
          <TextInputCustom name="Email" color="black" value={email} onChangeText={setEmail} />
          <TouchableOpacity style={styles.button} onPress={handleSendEmail}>
            <Text style={styles.buttonText}>SEND</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Text style={styles.backButtonText}>&larr;</Text>
          </TouchableOpacity>
          <Text style={styles.title}>LOGIN</Text>
          <TextInputCustom name="Email" color="black" value={email} onChangeText={setEmail} />
          <TextInputCustom name="Password" color="red" value={password} onChangeText={setPassword} />
          <TouchableOpacity style={styles.forgotContainer} onPress={handleForgotPassword}>
            <Text style={styles.forgotText}>Forgot your password?</Text>
            <Text style={styles.arrow}>&rarr;</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <Text style={styles.loginText}>Or login with social account</Text>
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
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 25,
  },
  backButtonText: {
    fontSize: 40,
    color: 'red',
    fontFamily:'MetroMedium',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 80,
    fontFamily:'MetroBold',
  },
  customTextInput: {
    height: 40,
    width: 300,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
    fontFamily:'MetroMedium',
  },
  forgotContainer: {
    alignSelf:'flex-end',
    flexDirection:'row',
    alignItems:'center',
    marginBottom: 15,
  },
  forgotText: {
    fontSize: 14,
    color: 'black',
    lineHeight: 15,
    fontFamily:'MetroMedium',
  },
  arrow: {
    fontSize: 20,
    color: 'black',
    lineHeight: 20,
    fontFamily:'MetroMedium',
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginVertical: 15,
  },
  buttonText: {
    fontSize: 15,
    color:'white',
    textAlign:'center',
    fontWeight:'bold',
    fontFamily:'MetroBold',
  },
  loginText: {
    fontSize:15,
    color:'black',
    marginTop :100,
    marginVertical:15,
    fontFamily:'MetroMedium',
  },
  socialButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  socialButton: {
    width: 50,
    height: 50,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginHorizontal: 10,
  },
  socialButtonImage: {
    width: 24,
    height: 24,
  },
});

export default App;
