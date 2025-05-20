import React from 'react';
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
import {moderateScale} from '../../../helpers/ResponsiveFonts';
import getCustomButton from '../../common/getCustomButton';
import getCustomTextInput from '../../common/getCustomTextField';

import ResetPasswordViewModel from './resetPassswordViewModel';
const {height} = Dimensions.get('window');

const ResetPasswordScreen = () => {
  const navigation = useNavigation();
  const {
    password,
    confirmPassword,
    setPassword,
    setConfirmPassword,
    validateData,
  } = ResetPasswordViewModel(navigation);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color={colors.black} />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.subtitle}>Please enter your new password:</Text>

        {getCustomTextInput({
          placeholder: 'New Password',
          value: password,
          onChangeText: setPassword,
          secureTextEntry: true,
        })}

        {getCustomTextInput({
          placeholder: 'Confirm Password',
          value: confirmPassword,
          onChangeText: setConfirmPassword,
          secureTextEntry: true,
        })}

        {getCustomButton({
          onPress: validateData,
          content: 'Save',
        })}
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;

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
