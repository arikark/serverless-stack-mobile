/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';

import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Text, Input, Button } from 'react-native-elements';

import { useAuthContext } from "../../contexts/AuthContext";

export default function ConfirmSignupScreen({ route, navigation }) {
	const { user, setUser, authState, setAuthState } = useAuthContext();
	const [authCode, setAuthCode] = useState('');
	const { username, password } = route.params;

	async function confirmSignUp() {
		try {
			// await Auth.confirmSignUp(username, authCode);
			console.log(username)
			console.log(password)
			// await Auth.signIn(username, password);
			const currentUser = await Auth.currentAuthenticatedUser();
			setUser(currentUser);
			setAuthState('signedIn');
			console.log('✅ Code confirmed');
			console.log(user.attributes.email)
			console.log(authState)
			// navigation.navigate('SignIn');
		} catch (error) {
			console.log(
				'❌ Verification code does not match. Please enter a valid verification code.',
				error.code
			);
		}
	}
	return (
		<SafeAreaView style={styles.container}>
			<Card>
				<Input
					label='Confirmation Code'
					onChangeText={setAuthCode}
					value={authCode}
					autoCapitalize="none"
					autoCorrect={false}
				/>
				<Button title='Confirm Sign Up' onPress={confirmSignUp} />
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