import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonCustom from './component/Button/Button';
import TextInputCustom from './component/Button/Text/Textinput';
import CustomText from './component/Button/Text/Text';
import Icon from './component/Button/Icon';

const SignUpPage = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.header}>
        <Text style={styles.title}>SIGNUP</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <TextInputCustom name="Username" color="black" label="Nama" />
        <TextInputCustom name="Email" color="black" label="Nama" />
        <TextInputCustom name="Password" color="red" label="Nama" />
        <View style={{ marginLeft: 30 }}>
          <CustomText text="Already have an account?" onPress={() => navigation.navigate('Login')} />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 80 }}>
        <ButtonCustom color="red" text="SignUp" onPress={() => navigation.navigate('Login')} />
        <CustomText text="Or Sign Up with social account" />
        <View style={{ flexDirection: 'row', marginTop: 30 }}>
          <Icon imageSource={require('./assets/goggle.png')} onPress={() => navigation.navigate('Login')} />
          <Icon imageSource={require('./assets/Fb.png')} onPress={() => navigation.navigate('Login')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 20, marginLeft: 30, marginBottom: 50 },
  title: { fontSize: 35, color: 'red', fontFamily: 'MetroBold' },
});

export default SignUpPage;
