/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import NavLink from '../../../components/NavLink';
import { Card, Text, Input, Button } from 'react-native-elements';

import { useDispatch, useSelector } from 'react-redux'
import { signIn, selectErrorMessage } from '../authSlice'
import SpacedBackgroundLayout from '../../../components/SpacedBackgroundLayout';

export default function SigninScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const signInError = useSelector(selectErrorMessage)
  const authDispatch = useDispatch()

  async function onSignInSubmit() {
    try {
      await authDispatch(signIn({ username, password }))
      console.log(signInError)
    } catch (error) {
      console.log('Error sending to dispatch...', error);
    }
  }

  return (
    <SpacedBackgroundLayout>
      <Card>
        <Input
          label='Username'
          value={username}
          onChangeText={setUsername}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Input
          label='Password'
          onChangeText={setPassword}
          value={password}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry />
        {signInError && <Text>{signInError}</Text>}
        <Button title='Sign In' disabled={!username || !password} onPress={() => onSignInSubmit(username, password)} />
        <NavLink text="Don't have an account? Sign up" routeName="/Signup" />
      </Card>
    </SpacedBackgroundLayout>
  );
}



