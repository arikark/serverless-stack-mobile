/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import SpacedBackgroundLayout from '../../../components/SpacedBackgroundLayout';
import { Card, Input, Button } from 'react-native-elements';

import { useDispatch, useSelector } from 'react-redux'
import { confirmSignUp, signIn, selectErrorMessage } from '../authSlice'

export default function ConfirmSignupScreen({ route }) {
	const authDispatch = useDispatch()
	const signUpError = useSelector(selectErrorMessage)
	const [authCode, setAuthCode] = useState('');
	const { username, password, email } = route.params;

	async function onConfirmSignUpSubmit() {
		try {
			await authDispatch(confirmSignUp({ username, authCode }))
      !signUpError && await authDispatch(signIn({ username, password }))
		} catch (error) {
			console.log(
				'❌ Verification code does not match. Please enter a valid verification code.',
				error.code
			);
		}
	}
	return (
    <SpacedBackgroundLayout>
			<Card>
				<Card.Title>Confirmation code sent to {email}</Card.Title>
				<Input
					label='Confirmation Code'
					onChangeText={setAuthCode}
					value={authCode}
					autoCapitalize="none"
					autoCorrect={false}
				/>
				<Button title='Confirm Sign Up' onPress={onConfirmSignUpSubmit} />
			</Card>
    </SpacedBackgroundLayout>
	);
}
