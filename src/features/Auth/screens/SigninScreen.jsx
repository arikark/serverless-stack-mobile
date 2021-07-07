/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";

import NavLink from "../../../components/NavLink";
import { Card, Input, Button } from "react-native-elements";

import { useDispatch, useSelector } from "react-redux";
import {
  signIn,
  resendAuthCode,
  selectErrorMessage,
  selectApiStatus,
} from "../authSlice";
import SpacedBackgroundLayout from "../../../components/SpacedBackgroundLayout";

export default function SigninScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const authApiStatus = useSelector(selectApiStatus);
  const authError = useSelector(selectErrorMessage);
  const authDispatch = useDispatch();

  async function onSignInSubmit() {
    await authDispatch(signIn({ username, password }));
  }

  useEffect(() => {
    const resendSignUpCode = async () => {
      await authDispatch(resendAuthCode({ username }));
    };
    if (authError === "User is not confirmed.") {
      resendSignUpCode();
      navigation.navigate("ConfirmSignup", { username, password });
    }
  });

  return (
    <SpacedBackgroundLayout>
      <Card>
        <Input
          label="Email or Username"
          value={username}
          onChangeText={setUsername}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Input
          label="Password"
          onChangeText={setPassword}
          value={password}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        <Button
          title="Sign In"
          loading={authApiStatus.includes("Loading")}
          disabled={!username || !password}
          onPress={() => onSignInSubmit(username, password)}
        />
        <NavLink text="Forgot password?" routeName="/InitResetPassword" />
        <NavLink text="Don't have an account? Sign up" routeName="/Signup" />
      </Card>
    </SpacedBackgroundLayout>
  );
}
