/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';

import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Text, Input, Button } from 'react-native-elements';
import { Link } from '@react-navigation/native';

import { useAuthContext } from "../../../contexts/AuthContext";
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../authSlice'


export default function SigninScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const { user, userDispatch } = useAuthContext({});

  const authDispatch = useDispatch()

  async function onSignInSubmit() {
    try {
      await authDispatch(signIn({ username, password }))
    } catch (error) {
      console.log('❌ Error signing in...', error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <Card.Title>Sign In</Card.Title>
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
        <Button title='Sign In' onPress={() => onSignInSubmit(username, password)} />
        <Link to="/Signup">Sign Up</Link>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  }
})