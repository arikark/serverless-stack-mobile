/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

import SpacedBackgroundLayout from "../../../components/SpacedBackgroundLayout";
import { Card, Input, Button } from "react-native-elements";

import { useDispatch, useSelector } from "react-redux";
import {
  confirmSignUp,
  signIn,
  selectApiStatus,
  selectErrorMessage,
} from "../authSlice";

export default function ConfirmSignupScreen({ route }) {
  const authDispatch = useDispatch();
  const authApiStatus = useSelector(selectApiStatus);
  const authError = useSelector(selectErrorMessage);
  const [authCode, setAuthCode] = useState("");
  const { username, password } = route.params;

  async function onConfirmSignUpSubmit() {
    try {
      await authDispatch(confirmSignUp({ username, authCode, password }));
    } catch (error) {
      console.log(
        "❌ Verification code does not match. Please enter a valid verification code.",
        error.code
      );
    }
  }

  useEffect(() => {
    const signInAfterConfirm = async () => {
      await authDispatch(signIn({ username, password }));
    };
    authApiStatus === "confirmSignUpSucceeded" && signInAfterConfirm();
  }, [authApiStatus]);

  return (
    <SpacedBackgroundLayout>
      <Card>
        <Card.Title>Confirmation code sent to {username}</Card.Title>
        <Input
          label="Confirmation Code"
          onChangeText={setAuthCode}
          value={authCode}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Button
          title="Confirm Sign Up"
          onPress={onConfirmSignUpSubmit}
          loading={authApiStatus.includes("Loading")}
        />
      </Card>
    </SpacedBackgroundLayout>
  );
}
