import {useState} from 'react';
import {Alert} from 'react-native';

const OtpViewModel = navigation => {
  const [otp, setOtp] = useState('');

  const validateData = () => {
    if (!otp) {
      Alert.alert('Alert', 'Please enter the 4 digit OTP');
      return;
    } else if (otp.length !== 4) {
      Alert.alert('Alert', 'Please enter a valid OTP');
      return;
    }
    // Alert.alert('Success', `Entered OTP: ${otp}`);
    navigation.navigate('resetPasswordScreen');
  };

  return {
    otp,
    setOtp,
    validateData,
  };
};

export default OtpViewModel;
