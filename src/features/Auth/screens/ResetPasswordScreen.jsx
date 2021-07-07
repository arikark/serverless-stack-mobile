/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import SpacedBackgroundLayout from '../../../components/SpacedBackgroundLayout';
import { Card, Input, Button } from 'react-native-elements';

import { useDispatch, useSelector } from 'react-redux'
import { signIn, resetPassword, selectErrorMessage, selectApiStatus } from '../authSlice'

export default function ConfirmSignupScreen({ route }) {
	const authDispatch = useDispatch()
	const authApiStatus = useSelector(selectApiStatus)
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [authCode, setAuthCode] = useState('');
	const { username } = route.params;

	async function onResetSubmit() {
		password === confirmPassword &&
		await authDispatch(resetPassword({ username, authCode, password }))
	}
	const renderInitReset = () => {
		return (
			<Card>
				<Input
					label='6 Digit Code'
					onChangeText={setAuthCode}
					value={authCode}
					autoCapitalize="none"
					autoCorrect={false}
				/>
				<Input
					label='New Password'
					onChangeText={setPassword}
					value={password}
					autoCapitalize="none"
					autoCorrect={false}
					secureTextEntry
				/>
				<Input
					label='Confirm New Password'
					onChangeText={setConfirmPassword}
					value={confirmPassword}
					autoCapitalize="none"
					autoCorrect={false}
					secureTextEntry
				/>
				<Button
					title='Reset Password'
					loading={ authApiStatus.includes('Loading') }
					onPress={onResetSubmit} />
			</Card>
		)
	}

	useEffect(() => {
		const signInAfterConfirm = async () => {
			await authDispatch(signIn({ username, password }));
		}
		authApiStatus === "resetPasswordSucceeded" && signInAfterConfirm()
  }, [authApiStatus])

	return (
		<SpacedBackgroundLayout>
			{renderInitReset()}
    </SpacedBackgroundLayout>
	);
}
