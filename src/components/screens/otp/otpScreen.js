import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../constants/colors';
import {moderateScale} from '../../../helpers/ResponsiveFonts';
import getCustomButton from '../../common/getCustomButton';
import {OtpInput} from 'react-native-otp-entry';
import OtpViewModel from './otpViewModel';

const {height} = Dimensions.get('window');

const OtpScreen = () => {
  const navigation = useNavigation();
  const {otp, setOtp, validateData} = OtpViewModel(navigation);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color={colors.black} />
        </TouchableOpacity>

        <Text style={styles.title}>Verify OTP</Text>
        <Text style={styles.subtitle}>
          Please enter the OTP to reset your password:
        </Text>

        <OtpInput
          numberOfDigits={4}
          focusColor={null}
          autoFocus={false}
          hideStick={true}
          blurOnFilled={true}
          disabled={false}
          type="numeric"
          secureTextEntry={false}
          focusStickBlinkingDuration={500}
          onTextChange={setOtp}
          onFilled={setOtp}
          textInputProps={{
            accessibilityLabel: 'One-Time Password',
          }}
          textProps={{
            accessibilityRole: 'text',
            accessibilityLabel: 'OTP digit',
            allowFontScaling: false,
          }}
          theme={{
            containerStyle: styles.otpContainer,
            pinCodeContainerStyle: styles.pinCodeContainer,
          }}
        />

        {getCustomButton({
          onPress: validateData,
          content: 'Reset Password',
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  pinCodeContainer: {
    width: moderateScale(45),
    height: moderateScale(45),
    borderRadius: moderateScale(8),
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.textFieldBorder,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: moderateScale(4),
  },
  scrollContent: {
    paddingTop: height * 0.05,
    paddingBottom: height * 0.1,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
    padding: 10,
  },
  title: {
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.black,
    marginBottom: height * 0.01,
  },
  subtitle: {
    fontSize: moderateScale(14),
    color: colors.placeHolder,
    textAlign: 'center',
    marginBottom: height * 0.04,
  },
});
