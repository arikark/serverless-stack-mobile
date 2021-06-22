import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AuthStackScreens from './src/navigators/AuthStackScreens';
import AppStackScreens from './src/navigators/AppStackScreens';
import { AuthContextProvider } from "./src/contexts/AuthContext";

import Amplify from 'aws-amplify';

import config from './config';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
  },
  API: {
    endpoints: [
      {
        name: 'notes',
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION,
      },
    ],
  },
});

import { ThemeProvider, Button } from 'react-native-elements';

const theme = {
  Button: {
    containerStyle: {
      margin: 15,
    },
    buttonStyle: {
      width: "100%",
      borderRadius: 35,
    },
    titleStyle: {
      color: "white",
    },
  },
  Input: {
    containerStyle: {
      margin: 10,
    },
  },
  Card: {
  }
};

export default function App() {
  // const userToken = ''
  return (
    <ThemeProvider theme={theme} >
      <NavigationContainer>
        <AuthContextProvider>
          {1 === 2 ? (<AppStackScreens />) : (<AuthStackScreens />)}
        </AuthContextProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
