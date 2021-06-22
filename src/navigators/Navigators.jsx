import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AuthStackScreens from './AuthStackScreens';
import AppStackScreens from './AppStackScreens';
import { useAuthContext } from "../contexts/AuthContext";


export default function Navigators() {
	const { user, setUser, authState, setAuthState } = useAuthContext();
	return (
		<NavigationContainer>
			{authState === 'signedIn' ?
				(<AppStackScreens />) :
				(<AuthStackScreens />)
			}
		</NavigationContainer>
	);
}
