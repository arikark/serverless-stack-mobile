import React from 'react';
import { StyleSheet} from 'react-native';
import { Text, Button } from 'react-native-elements';

import { useDispatch, useSelector } from 'react-redux'
import { signOut, selectCurrentUser, selectApiStatus } from '../../Auth/authSlice';

import SpacedBackgroundLayout from '../../../components/SpacedBackgroundLayout';

export default function AccountScreen() {
  const authDispatch = useDispatch()
  const authApiStatus = useSelector(selectApiStatus)
  const user = useSelector(selectCurrentUser)

  async function onSignOutSubmit() {
    try {
      await authDispatch(signOut());
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  }

  return (
    <SpacedBackgroundLayout>
      <Text>Account Screen</Text>
      <Text>Username: {user.username}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Mobile: {user.phone_number} </Text>
      <Button
        title="Sign Out"
        loading={ authApiStatus.includes('Loading') }
        color="tomato"
        onPress={onSignOutSubmit} />
    </SpacedBackgroundLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
});