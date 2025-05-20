import {useState} from 'react';
import {Alert} from 'react-native';
import {isValidEmail, isValidPassword} from '../../common/validations';
import {makeApiCall} from '../../../network/apiService';
import {createSignInRequest} from '../../../model/requestModel/signInRequest';
export const LoginViewModel = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateData = async () => {
    if (!email) {
      Alert.alert('Alert', 'Please enter your email');
      return;
    } else if (!isValidEmail(email)) {
      Alert.alert('Alert', 'Please enter a valid email');
      return;
    } else if (!password) {
      Alert.alert('Alert', 'Please enter your password');
      return;
    } else if (!isValidPassword(password)) {
      Alert.alert(
        'Alert',
        'Password must be 8–20 characters long and include at least one uppercase letter, one lowercase letter, and one special character',
      );
      return;
    } else {
      console.log('Request Object:');

      const requestObj = createSignInRequest({
        email: email,
        password: password,
        fcmToken: 'sample_fcm_token',
      });
      console.log('Request Object:', JSON.stringify(requestObj));

      const response = await makeApiCall({
        endpoint: 'sign-in',
        method: 'POST',
        body: JSON.stringify(requestObj),
      });

      console.log('API Response:', JSON.stringify(response));
      if (response.success) {
        Alert.alert('Success', 'Login successful');
      } else {
        Alert.alert('Error', response.message || 'Login failed');
      }
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    validateData,
  };
};
