import {useState} from 'react';
import {Alert} from 'react-native';
import {isValidEmail} from '../../common/validations';
import {makeApiCall} from '../../../network/apiService';

import {createForgotPasswordRequest} from '../../../model/requestModel/forgotPassworRequest';

const ForgotPasswordViewModel = navigation => {
  const [email, setEmail] = useState('');

  const validateData = async () => {
    if (!email) {
      Alert.alert('Alert', 'Please enter your email');
      return;
    } else if (!isValidEmail(email)) {
      Alert.alert('Alert', 'Please enter a valid email');
      return;
    } else {
      const requestObj = createForgotPasswordRequest({
        email: email,
      });
      console.log('Request Object:', JSON.stringify(requestObj));

      const response = await makeApiCall({
        endpoint: 'forgot-password',
        method: 'POST',
        body: JSON.stringify({email}),
      });
      console.log('API Responsesssss:', JSON.stringify(response));

      navigation.navigate('otpScreen');
    }
  };
  return {
    email,
    setEmail,
    validateData,
  };
};

export default ForgotPasswordViewModel;
