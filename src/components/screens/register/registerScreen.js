import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CountryPicker from 'react-native-country-picker-modal';
import {moderateScale} from '../../../helpers/ResponsiveFonts';
import getCustomButton from '../../common/getCustomButton';
import getCustomTextInput from '../../common/getCustomTextField';
import colors from '../../../constants/colors';
import RegisterViewModel from './registerViewModel';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const {width, height} = Dimensions.get('window');

const RegisterScreen = () => {
  const navigation = useNavigation();

  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    validateData,
    visible,
    setIsVisible,
    countryCode,
    callingCode,

    onSelect,
  } = RegisterViewModel(navigation);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#333" />
        </TouchableOpacity>

        <Text style={styles.title}>Create Account</Text>

        {getCustomTextInput({
          placeholder: 'First Name',
          value: firstName,
          onChangeText: setFirstName,
        })}
        {getCustomTextInput({
          placeholder: 'Last Name',
          value: lastName,
          onChangeText: setLastName,
        })}

        {getCustomTextInput({
          placeholder: 'Email',
          value: email,
          onChangeText: setEmail,
          keyboardType: 'email-address',
          autoCapitalize: 'none',
        })}
        <View style={styles.phoneRow}>
          <Pressable
            style={styles.countryCodeWrapper}
            onPress={() => setIsVisible(true)}>
            <TextInput
              style={styles.countryCode}
              value={`+${callingCode}`}
              editable={false}
              pointerEvents="none"
            />
          </Pressable>

          <TextInput
            placeholder="Phone Number"
            placeholderTextColor="#aaa"
            style={styles.phoneInput}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />

          {visible && (
            <CountryPicker
              countryCode={countryCode}
              withFilter
              withFlag
              withCallingCode
              withEmoji
              withAlphaFilter
              onSelect={onSelect}
              onClose={() => setIsVisible(false)}
              visible={true}
            />
          )}
        </View>
        {getCustomTextInput({
          placeholder: 'Password',
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
          content: 'Register',
        })}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  scrollContent: {
    paddingTop: height * 0.05,
    paddingBottom: height * 0.009,
  },
  title: {
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: height * 0.05,
    color: colors.black,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
    padding: 10,
  },

  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.02,
    marginHorizontal: width * 0.05,
    gap: 10,
  },
  countryCodeWrapper: {
    width: 80,
  },
  countryCode: {
    height: moderateScale(45),
    borderColor: colors.textFieldBorder,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    color: colors.black,
    fontSize: moderateScale(16),
    textAlign: 'center',
  },
  phoneInput: {
    flex: 1,
    height: moderateScale(45),
    borderColor: colors.textFieldBorder,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: moderateScale(16),
    backgroundColor: colors.white,
    color: colors.black,
    fontSize: moderateScale(16),
  },
  button: {
    backgroundColor: colors.blue,
    paddingVertical: height * 0.018,
    borderRadius: 8,
    marginTop: height * 0.02,
  },
  buttonText: {
    color: colors.white,
    fontSize: moderateScale(17),
    textAlign: 'center',
  },
});
