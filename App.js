import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
import loginScreen from './src/components/screens/login/loginScreen';
import registerScreen from './src/components/screens/register/registerScreen';
import forgotPasswordScreen from './src/components/screens/forgotPassword/forgotPasswordScreen';
import otpScreen from './src/components/screens/otp/otpScreen';
import resetPasswordScreen from './src/components/screens/resetPassword/resetPasswordScreen';
const App = () => {
  useEffect(() => {}, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="loginScreen"
          screenOptions={{
            headerTransparent: true,
            gestureEnabled: false,
            headerShown: false,
          }}>
          <Stack.Screen name="loginScreen" component={loginScreen} />
          <Stack.Screen name="registerScreen" component={registerScreen} />
          <Stack.Screen
            name="forgotPasswordScreen"
            component={forgotPasswordScreen}
          />
          <Stack.Screen name="otpScreen" component={otpScreen} />
          <Stack.Screen
            name="resetPasswordScreen"
            component={resetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
