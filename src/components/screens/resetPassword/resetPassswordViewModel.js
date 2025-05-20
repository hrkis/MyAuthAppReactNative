import {useState} from 'react';
import {Alert} from 'react-native';
import {isValidPassword} from '../../common/validations';
import {makeApiCall} from '../../../network/apiService';
import {createResetPasswordRequest} from '../../../model/requestModel/resetPasswordRequest';

const ResetPasswordViewModel = navigation => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateData = async () => {
    if (!password) {
      Alert.alert('Alert', 'Please enter your new password');
      return;
    } else if (!isValidPassword(password)) {
      Alert.alert(
        'Alert',
        'Password must be 8–20 characters long and include at least one uppercase letter, one lowercase letter, and one special character',
      );
      return;
    } else if (!confirmPassword) {
      Alert.alert('Alert', 'Please enter your confirm password');
      return;
    } else if (password !== confirmPassword) {
      Alert.alert('Alert', 'Passwords do not match');
      return;
    } else {
      console.log('Reset password');
      const requestObj = createResetPasswordRequest({
        email: 'balwinder@yopmail.com',
        password: password,
        password_confirmation: confirmPassword,
        otp: 1234,
      });
      console.log('Request Object:', JSON.stringify(requestObj));
      const response = await makeApiCall({
        endpoint: 'reset-password',
        method: 'POST',
        body: JSON.stringify({password}),
      });
      console.log('API Response:', JSON.stringify(response));
      if (response.success) {
        Alert.alert('Success', 'Password reset successful');
      } else {
        Alert.alert('Error', response.message || 'Password reset failed');
      }
      // navigation.navigate('loginScreen');
    }
  };

  return {
    password,
    confirmPassword,
    setPassword,
    setConfirmPassword,
    validateData,
  };
};

export default ResetPasswordViewModel;
