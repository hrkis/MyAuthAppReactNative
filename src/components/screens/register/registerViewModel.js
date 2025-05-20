import {useState} from 'react';
import {Alert} from 'react-native';
import {
  isValidName,
  isValidEmail,
  isValidPhone,
  isValidPassword,
} from '../../common/validations';
import {makeApiCall} from '../../../network/apiService';
import {createSignUpRequest} from '../../../model/requestModel/signUpRequest';

const RegisterViewModel = navigation => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [countryCode, setCountryCode] = useState('US');
  const [callingCode, setCallingCode] = useState('1');
  const [visible, setIsVisible] = useState(false);

  const validateData = async () => {
    if (!firstName) {
      Alert.alert('Alert', 'Please enter your first name');
      return;
    } else if (!isValidName(firstName)) {
      Alert.alert('Alert', 'Please enter a valid first name');
      return;
    } else if (!lastName) {
      Alert.alert('Alert', 'Please enter your last name');
      return;
    } else if (!isValidName(lastName)) {
      Alert.alert('Alert', 'Please enter a valid last name');
      return;
    } else if (!email) {
      Alert.alert('Alert', 'Please enter your email');
      return;
    } else if (!isValidEmail(email)) {
      Alert.alert('Alert', 'Please enter a valid email');
      return;
    } else if (!phoneNumber) {
      Alert.alert('Alert', 'Please enter your phone number');
      return;
    } else if (!isValidPhone(`+${callingCode}${phoneNumber}`)) {
      Alert.alert('Alert', 'Please enter a valid phone number');
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
    } else if (!confirmPassword) {
      Alert.alert('Alert', 'Please enter your confirm password');
      return;
    } else if (password !== confirmPassword) {
      Alert.alert('Alert', 'Passwords do not match');
      return;
    } else {
      console.log('Registration successful');
      try {
        const requestObj = createSignUpRequest({
          firstName: firstName,
          lastName: lastName,
          companyName: 'XYZ',
          isIndividual: '0',
          fcmToken: 'sample_fcm_token',
          email: email,
          password: password,
        });
        console.log('Request Object:', JSON.stringify(requestObj));
        if (true) {
          return;
        }
        const response = await makeApiCall({
          endpoint: 'sign-up',
          method: 'POST',
          body: JSON.stringify(requestObj),
        });

        console.log('API Response:', JSON.stringify(response));
        if (response.success) {
          Alert.alert('Success', 'Registration successful');
        } else {
          Alert.alert('Error', response.message || 'Registration failed');
        }
      } catch (e) {
        console.log('Error:', e);
      }
    }
  };
  const onSelect = country => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
    setIsVisible(false);
  };

  return {
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
  };
};

export default RegisterViewModel;
