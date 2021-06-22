import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Signin from './Signin';
import SignupScreen from './SignupScreen';

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <SignupScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

