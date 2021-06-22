/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';

import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Text, Input, Button } from 'react-native-elements';

import { useAuthContext } from "../../contexts/AuthContext";

export default function SignupScreen({ navigation }) {
	const { user, setUser, authState, setAuthState } = useAuthContext();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	function signUp() {
		try {
			// await Auth.signUp({ username, password, attributes: { email } });
			console.log('✅ Sign-up Confirmed');
			console.log(username, email, password)
			// navigation.navigate('ConfirmSignUp');
		} catch (error) {
			console.log('❌ Error signing up...', error);
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<Card>
				<Input
					label='Username'
					value={username}
					onChangeText={setUsername}
					autoCorrect={false}
				/>
				<Input
					label='Email'
					value={email}
					onChangeText={setEmail}
					autoCapitalize="none"
					autoCorrect={false} />
				<Input
					label='Password'
					onChangeText={setPassword}
					value={password}
					autoCapitalize="none"
					autoCorrect={false}
					secureTextEntry />
				<Button title='Sign Up' onPress={() => signUp()} />
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