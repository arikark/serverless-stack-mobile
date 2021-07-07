/* eslint-disable require-jsdoc */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SigninScreen from '../features/Auth/screens/SigninScreen'
import SignupScreen from '../features/Auth/screens/SignupScreen';
import ConfirmSignupScreen from '../features/Auth/screens/ConfirmSignupScreen';
import InitResetPasswordScreen from '../features/Auth/screens/InitResetPasswordScreen';
import ResetPasswordScreen from '../features/Auth/screens/ResetPasswordScreen';

const AuthStack = createStackNavigator();
function AuthStackScreens() {
  return (
    <AuthStack.Navigator screenOptions={{
      headerShown: true,
      headerTransparent: true,
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      animationEnabled: true,
    }}>
      <AuthStack.Screen
        name="Signin"
        component={SigninScreen}
        options={{title: 'Login' }}
      />
      <AuthStack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ title: 'Register' }}
      />
      <AuthStack.Screen
        name="ConfirmSignup"
        component={ConfirmSignupScreen}
        options={{ title: "Confirm Email" }}
      />
      <AuthStack.Screen
        name="InitResetPassword"
        component={InitResetPasswordScreen}
        options={{ title: "Reset Password" }}
      />
      <AuthStack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={{ title: "Reset Password" }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreens;
