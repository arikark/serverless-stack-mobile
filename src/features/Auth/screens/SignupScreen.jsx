import React, { useState } from 'react';
import SpacedBackgroundLayout from '../../../components/SpacedBackgroundLayout';

import { StyleSheet } from 'react-native';
import { Card, Input, Button } from 'react-native-elements';

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
			// only navigate if success
			navigation.navigate('ConfirmSignup', { username, password });
		} catch (error) {
			console.log('❌ Error signing up...', error);
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
				<Button title='Sign Up' disabled={!username || !password || !email} onPress={onSignUpSubmit} />
			</Card>
    </SpacedBackgroundLayout>
	);
}

const styles = StyleSheet.create({
	card: {
		shadowColor: 'rgba(0,0,0, .2)',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0, //default is 1
    shadowRadius: 0//default is 1
	}
})