/* eslint-disable require-jsdoc */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../screens/Auth/SignupScreen';

const AuthStack = createStackNavigator();
function AuthStackScreens() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Signup" component={SignupScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreens;
