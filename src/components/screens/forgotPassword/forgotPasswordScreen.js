import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../constants/colors';
import getCustomButton from '../../common/getCustomButton';
import {moderateScale} from '../../../helpers/ResponsiveFonts';
import getCustomTextInput from '../../common/getCustomTextField';
import ForgotPasswordViewModel from './forgotpasswordViewModel';
const {height} = Dimensions.get('window');

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const {email, setEmail, validateData} = ForgotPasswordViewModel(navigation);

  useEffect(() => {
    if (__DEV__) {
      setEmail('balwinder@yopmail.com');
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color={colors.black} />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>
          Please enter your email to reset your password:
        </Text>

        {getCustomTextInput({
          placeholder: 'Email',
          value: email,
          onChangeText: setEmail,
          keyboardType: 'email-address',
          autoCapitalize: 'none',
        })}

        {getCustomButton({
          onPress: validateData,
          content: 'Send OTP',
        })}
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  backButton: {
    top: 10,
    left: 10,
    padding: 10,
    zIndex: 1,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: height * 0.01,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: moderateScale(14),
    color: colors.placeHolder,
    marginBottom: height * 0.04,
    textAlign: 'center',
  },
});
