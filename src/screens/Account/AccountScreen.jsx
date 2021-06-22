import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { useAuthContext } from "../../contexts/AuthContext";


export default function AccountScreen() {
  const { user, setUser, authState, setAuthState } = useAuthContext();

  async function signOut() {
    try {
      await Auth.signOut();
      setAuthState('signedOut');
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Account Screen</Text>
      <Text>Email: {user.attributes.email} </Text>
      <Text>Status: {authState} </Text>
      <Button title="Sign Out" color="tomato" onPress={signOut} />
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
