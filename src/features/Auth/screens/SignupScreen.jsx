import React, { useState, useEffect } from 'react';

import SpacedBackgroundLayout from '../../../components/SpacedBackgroundLayout';
import { Card, Input, Button } from 'react-native-elements';

import { signUp, selectApiStatus } from '../authSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function SignupScreen({ navigation }) {
	const authDispatch = useDispatch()
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const authApiStatus = useSelector(selectApiStatus)

	async function onSignUpSubmit() {
		try {
			await authDispatch(signUp({ username, password, email }));
		} catch (error) {
			console.log('❌ Error signing up...', error);
		}
	}

	useEffect(() => {
		authApiStatus === "signUpSucceeded" && navigation.navigate('ConfirmSignup', { username, password });
  }, [authApiStatus])

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
				<Button
					title='Sign Up'
					loading={ authApiStatus.includes('Loading') }
					disabled={!username || !password || !email}
					onPress={onSignUpSubmit} />
			</Card>
    </SpacedBackgroundLayout>
	);
}

