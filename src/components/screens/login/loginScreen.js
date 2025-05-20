import React, {useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import colors from '../../../constants/colors';
import {moderateScale} from '../../../helpers/ResponsiveFonts';
import getCustomButton from '../../common/getCustomButton';
import {LoginViewModel} from './loginViewModel';
import getCustomTextInput from '../../common/getCustomTextField';
import getCustomTextWithLink from '../../common/getCustomTextWithLink';
const {height} = Dimensions.get('window');

const LoginScreen = () => {
  const navigation = useNavigation();
  const {email, setEmail, password, setPassword, validateData} =
    LoginViewModel();

  useEffect(() => {
    if (__DEV__) {
      setEmail('balwinder@yopmail.com');
      setPassword('Test@123');
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {getCustomTextInput({
          placeholder: 'Email',
          value: email,
          onChangeText: setEmail,
          keyboardType: 'email-address',
          autoCapitalize: 'none',
        })}
        {getCustomTextInput({
          placeholder: 'Password',
          value: password,
          onChangeText: setPassword,
          secureTextEntry: true,
        })}
        {getCustomButton({
          onPress: validateData,
          content: 'Log In',
        })}
        <TouchableOpacity
          onPress={() => navigation.navigate('forgotPasswordScreen')}>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
        {getCustomTextWithLink({
          text: "Don't have an account? ",
          linkText: 'Register',
          onPress: () => navigation.navigate('registerScreen'),
        })}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.gray,
  },
  title: {
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: height * 0.05,
    color: colors.black,
  },

  link: {
    color: colors.blue,
    fontSize: moderateScale(14),
    textAlign: 'center',
  },
});
