import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonCustom from './component/Button/Button';
import TextInputCustom from './component/Button/Text/Textinput';
import CustomText from './component/Button/Text/Text';

const ForgetPassPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>FORGET PASSWORD</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.textContainer}>
          <CustomText text="Please, enter your email address. You will receive a link to create a new password via email." />
        </View>
        <TextInputCustom name="email" color="red" />
        <CustomText text="Not a valid email address. Should be your@gmail.com" color="red" fontSize={12} />
        <ButtonCustom color="red" text="Send" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: { justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 45, marginLeft: 35, marginBottom: 50 },
  title: { fontSize: 35, color: '#951332', fontFamily: 'MetroBold', marginLeft: 20 },
  body: { alignItems: 'center', justifyContent: 'center' },
  textContainer: { marginBottom: 35 },
});

export default ForgetPassPage;
