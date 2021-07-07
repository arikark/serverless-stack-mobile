/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import SpacedBackgroundLayout from '../../../components/SpacedBackgroundLayout';
import { Card, Input, Button } from 'react-native-elements';

import { useDispatch, useSelector } from 'react-redux'
import { initResetPassword, selectErrorMessage, selectApiStatus } from '../authSlice'

export default function ConfirmSignupScreen({ navigation }) {
	const authDispatch = useDispatch()
	const authError = useSelector(selectErrorMessage)
	const authApiStatus = useSelector(selectApiStatus)
	const [username, setUsername] = useState('');

	async function onInitResetSubmit() {
		try {
			await authDispatch(initResetPassword({ username }))
		} catch (error) {
			console.log(
				'❌ Verification code does not match. Please enter a valid verification code.',
				error.code
			);
		}
	}

	const renderInitReset = () => {
		return (
			<Card>
				<Input
					label='Email or Username'
					onChangeText={setUsername}
					value={username}
					autoCapitalize="none"
					autoCorrect={false}
				/>
				<Button
					loading={ authApiStatus.includes('Loading') }
					title='Reset Password'
					onPress={onInitResetSubmit} />
			</Card>
		)
	}

	useEffect(() => {
		authApiStatus === "initResetPasswordSucceeded" && navigation.navigate('ResetPassword', { username });
  }, [authApiStatus])


	return (
		<SpacedBackgroundLayout>
			{renderInitReset()}
    </SpacedBackgroundLayout>
	);
}
