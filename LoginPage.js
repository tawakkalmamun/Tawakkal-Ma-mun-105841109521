import React from 'react';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import ButtonCustom from './component/Button/Button';
import TextInputCustom from './component/Button/Text/Textinput';
import CustomText from './component/Button/Text/Text';
import Icon from './component/Button/Icon';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>LOGIN</Text>
      </View>
      <View style={styles.body}>
        <TextInputCustom name="email" color="black" label="Email" />
        <TextInputCustom name="password" color="red" label="Password" />
        <View style={styles.link}>
          <CustomText text="Forgot your password?" onPress={() => navigation.navigate('ForgetPassPage')} />
        </View>
        <ButtonCustom color="red" text="Login" onPress={() => navigation.navigate('VisualSearch')} />
      </View>
      <View style={styles.footer}>
        <CustomText text="Or Login with social account" />
        <View style={styles.iconContainer}>
          <Icon imageSource={require('./assets/goggle.png')} />
          <Icon imageSource={require('./assets/Fb.png')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: { justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 30, marginLeft: 35, marginBottom: 50 },
  title: { fontSize: 35, color: '#951332', fontFamily: 'MetroBold' },
  body: { alignItems: 'center', justifyContent: 'center' },
  link: { marginLeft: 150 },
  footer: { marginLeft: 100 },
  iconContainer: { flexDirection: 'row' },
});

export default LoginPage;
