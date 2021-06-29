import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../features/Auth/authSlice';

import AuthStackScreens from './AuthStackScreens';
import AppStackScreens from './AppStackScreens';


export default function Navigators() {
	const user = useSelector(selectCurrentUser)
	return (
		<NavigationContainer>
			{user.signedIn ?
				(<AppStackScreens />) :
				(<AuthStackScreens />)
			}
		</NavigationContainer>
	);
}
