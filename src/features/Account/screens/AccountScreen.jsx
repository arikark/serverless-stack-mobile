import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-elements';

import { useDispatch, useSelector } from 'react-redux'
import { signOut, selectCurrentUser } from '../../Auth/authSlice';

export default function AccountScreen() {
	const authDispatch = useDispatch()
  const user = useSelector(selectCurrentUser)

  async function onSignOutSubmit() {
    try {
      await authDispatch(signOut());
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Account Screen</Text>
      <Text>Username: {user.username} </Text>
      <Text>Email: {user.email} </Text>
      <Text>Mobile: {user.phone_number} </Text>
      <Button title="Sign Out" color="tomato" onPress={onSignOutSubmit} />
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
