import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Auth } from "aws-amplify";

const initialState = {
  data: {},
  status: "idle",
  error: null,
};

export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ username, password }) => {
    const response = await Auth.signIn(username, password);
    console.log(response);
    return {
      ...response.attributes,
      username: response.username,
      signedIn: true,
    };
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ username, password, email }) => {
    console.log(username, password, email);
    const response = await Auth.signUp({
      username,
      password,
      attributes: { email },
    });
    console.log(response);
  }
);

export const confirmSignUp = createAsyncThunk(
  "auth/confirmSignUp",
  async ({ username, authCode, password }, { dispatch }) => {
    console.log(username, authCode);
    await Auth.confirmSignUp(username, authCode);
  }
);

export const signOut = createAsyncThunk("auth/signOut", async () => {
  await Auth.signOut();
});

export const initResetPassword = createAsyncThunk(
  "auth/initResetPassword",
  async ({ username }) => {
    await Auth.forgotPassword(username);
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ username, authCode, password }) => {
    await Auth.forgotPasswordSubmit(username, authCode, password);
  }
);
export const resendAuthCode = createAsyncThunk(
  "auth/resendAuthCode",
  async ({ username }) => {
    console.log(username);
    await Auth.resendSignUp(username);
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "auth/fetchCurrentUser",
  async () => {
    const response = await Auth.currentAuthenticatedUser();
    return response;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCurrentUser.pending]: (state, _action) => {
      state.status = "fetchCurrentUserLoading";
    },
    [fetchCurrentUser.fulfilled]: (state, action) => {
      state.status = "fetchCurrentUserSucceeded";
      //no need to account for new users being fetched during session (can use upsertMany)
      usersAdapter.setAll(state, action.payload);
    },
    [fetchCurrentUser.rejected]: (state, action) => {
      state.status = "fetchCurrentUserFailed";
      state.error = action.error.message;
    },

    [signIn.pending]: (state, action) => {
      state.status = "signInLoading";
    },
    [signIn.fulfilled]: (state, action) => {
      state.status = "signInSucceeded";
      state.data = action.payload;
      state.error = null;
    },
    [signIn.rejected]: (state, action) => {
      state.status = "signInFailed";
      state.error = action.error.message;
      console.log(state.error);
    },

    [signUp.pending]: (state, action) => {
      state.status = "signUpLoading";
    },
    [signUp.fulfilled]: (state, action) => {
      state.error = null;
      state.status = "signUpSucceeded";
    },
    [signUp.rejected]: (state, action) => {
      state.status = "signUpFailed";
      state.error = action.error.message;
      console.log(state.error);
    },

    [confirmSignUp.pending]: (state, action) => {
      state.status = "confirmSignUpLoading";
    },
    [confirmSignUp.fulfilled]: (state, action) => {
      state.error = null;
      state.status = "confirmSignUpSucceeded";
    },
    [confirmSignUp.rejected]: (state, action) => {
      state.status = "confirmSignUpFailed";
      state.error = action.error.message;
      console.log(state.error);
    },

    [signOut.pending]: (state, action) => {
      state.status = "signOutLoading";
    },
    [signOut.fulfilled]: (state, action) => {
      // is keeping status as idle on the login page the correct approach?
      state.status = "signOutSucceeded";
      state.data.signedIn = false;
      state.error = null;
    },
    [signOut.rejected]: (state, action) => {
      state.status = "signOutFailed";
      state.error = action.error.message;
      console.log(state.error);
    },

    [initResetPassword.pending]: (state, action) => {
      state.status = "initResetPasswordLoading";
    },
    [initResetPassword.fulfilled]: (state, action) => {
      state.status = "initResetPasswordSucceeded";
      state.error = null;
    },
    [initResetPassword.rejected]: (state, action) => {
      state.status = "initResetPasswordFailed";
      state.error = action.error.message;
      console.log(state.error);
    },

    [resetPassword.pending]: (state, action) => {
      state.status = "resetPasswordLoading";
    },
    [resetPassword.fulfilled]: (state, action) => {
      state.status = "resetPasswordSucceeded";
      state.error = null;
    },
    [resetPassword.rejected]: (state, action) => {
      state.status = "resetPasswordFailed";
      state.error = action.error.message;
      console.log(state.error);
    },

    [resendAuthCode.pending]: (state, action) => {
      state.status = "resendAuthCodeLoading";
    },
    [resendAuthCode.fulfilled]: (state, action) => {
      state.status = "resendAuthCodeSucceeded";
      state.error = null;
    },
    [resendAuthCode.rejected]: (state, action) => {
      state.status = "resendAuthCodeFailed";
      state.error = action.error.message;
      console.log(state.error);
    },
  },
});

export default authSlice.reducer;
export const selectCurrentUser = (state) => state.auth.data;
export const selectErrorMessage = (state) => state.auth.error;
export const selectApiStatus = (state) => state.auth.status;
