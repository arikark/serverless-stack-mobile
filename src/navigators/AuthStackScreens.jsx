/* eslint-disable require-jsdoc */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SigninScreen from '../features/Auth/screens/SigninScreen'
import SignupScreen from '../features/Auth/screens/SignupScreen';
import ConfirmSignupScreen from '../features/Auth/screens/ConfirmSignupScreen';

const AuthStack = createStackNavigator();
function AuthStackScreens() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Signin" component={SigninScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
      <AuthStack.Screen name="ConfirmSignup" component={ConfirmSignupScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreens;
