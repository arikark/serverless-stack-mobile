/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';

import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Text, Input, Button } from 'react-native-elements';

import { signUp } from '../authSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function SignupScreen({ navigation }) {
	const authDispatch = useDispatch()
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	async function onSignUpSubmit() {
		try {
			// const payload = { username, password, attributes: { email } }
			await authDispatch(signUp({ username, password, email }));
			navigation.navigate('ConfirmSignup', { username, password });
		} catch (error) {
			console.log('❌ Error signing up...', error);
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<Card>
				<Card.Title>Sign Up</Card.Title>
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
				<Button title='Sign Up' onPress={onSignUpSubmit} />
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