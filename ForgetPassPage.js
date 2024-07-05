import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';

const TextInputCustom = ({ name, color, value, onChangeText, errorMessage }) => (
  <>
    <TextInput
      placeholder={name}
      style={[styles.customTextInput, { color: color, borderColor: errorMessage ? 'red' : 'gray' }]}
      value={value}
      onChangeText={onChangeText}
    />
    {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
  </>
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
  const [emailError, setEmailError] = useState('');

  const handleForgotPassword = () => {
    setIsForgotPasswordVisible(true);
  };

  const handleSendEmail = () => {
    if (!validateEmail(email)) {
      setEmailError('Not a valid email address. Should be your@email.com');
    } else {
      setEmailError('');
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleBackPress = () => {
    setIsForgotPasswordVisible(false);
    setEmailError('');
    setEmail('');
  };

  const handleNavigateToSignUp = () => {
    console.log("Navigate to Sign Up");
  };

  if (!dapatFont) {
    return <Text>Font tidak ditemukan ...</Text>;
  }

  return (
    <View style={styles.container}>
      {isForgotPasswordVisible ? (
        <>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Text style={[styles.backButtonText, {fontFamily:'MetroBold'}]}>&larr;</Text>
          </TouchableOpacity>
          <Text style={[styles.title, { fontFamily: 'MetroMedium' }]}>Forgot Password</Text>
          <Text style={[styles.description, {fontFamily:'MetroMedium'}]}>
            Please, enter your email address. You will receive a link to create a new password via email.
          </Text>
          <TextInputCustom
            name="Email"
            color="black"
            value={email}
            onChangeText={setEmail}
            errorMessage={emailError}
          />
          <TouchableOpacity style={styles.button} onPress={handleSendEmail}>
            <Text style={[styles.buttonText, {fontFamily:'MetroMedium'}]}>SEND</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity style={styles.backButton} onPress={handleNavigateToSignUp}>
            <Text style={[styles.backButtonText, {fontFamily:'MetroBold'}]}>&larr;</Text>
          </TouchableOpacity>
          <Text style={[styles.title, {fontFamily:'MetroBold'}]}>LOGIN</Text>
          <TextInputCustom name="Email" color="black" value={email} onChangeText={setEmail} />
          <TextInputCustom name="Password" color="red" value={password} onChangeText={setPassword} />
          <TouchableOpacity style={styles.forgotContainer} onPress={handleForgotPassword}>
            <Text style={[styles.forgotText, {fontFamily:'MetroMedium'}]}>Forgot your password?</Text>
            <Text style={[styles.arrow, {fontFamily:'MetroMedium'}]}>&rarr;</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={[styles.buttonText, {fontFamily:'MetroBold'}]}>LOGIN</Text>
          </TouchableOpacity>
          <Text style={[styles.loginText, {fontFamily:'MetroMedium'}]}>Or login with social account</Text>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 40,
    color: 'red',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 60,
  },
  description: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  customTextInput: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
  errorText: {
    fontSize: 15,
    color: 'red',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  forgotContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  forgotText: {
    fontSize: 15,
    color: 'red',
    lineHeight: 15,
  },
  arrow: {
    fontSize: 30,
    color: 'red',
    lineHeight: 20,
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 15,
    color: 'blue',
    marginTop: 100,
    marginVertical: 10,
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