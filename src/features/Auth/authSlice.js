import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit'
import { Auth } from 'aws-amplify';

const initialState = {
  data: {},
  status: 'idle',
  error: null
}

export const signIn =
  createAsyncThunk('auth/signIn', async ({ username, password }) => {
    const response = await Auth.signIn(username, password);
    return {...response.attributes, username: response.username, signedIn: true }
  })

export const signUp =
  createAsyncThunk('auth/signUp', async ({ username, password, email }) => {
    console.log(username, password, email)
    const response = await Auth.signUp({ username, password, attributes: { email } });
    console.log(response)
  })

export const confirmSignUp =
  createAsyncThunk('auth/confirmSignUp', async ({ username, authCode }) => {
    console.log(username, authCode)
    const response = await Auth.confirmSignUp(username, authCode);
    console.log(response)
  })

export const signOut =
  createAsyncThunk('auth/signOut', async () => {
    await Auth.signOut();
  })

export const fetchCurrentUser =
  createAsyncThunk('auth/fetchCurrentUser', async () => {
  const response = await Auth.currentAuthenticatedUser();
  return response
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCurrentUser.pending]: (state, _action) => {
      state.status = 'loading'
    },
    [fetchCurrentUser.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      //no need to account for new users being fetched during session (can use upsertMany)
      usersAdapter.setAll(state, action.payload)
    },
    [fetchCurrentUser.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },

    [signIn.pending]: (state, action) => {
      state.status = 'loading'
    },
    [signIn.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.data = action.payload
    },
    [signIn.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
      console.log(state.error)
    },

    [signUp.pending]: (state, action) => {
      state.status = 'loading'
    },
    [signUp.fulfilled]: (state, action) => {
      state.status = 'succeeded'
    },
    [signUp.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
      console.log(state.error)
    },

    [confirmSignUp.pending]: (state, action) => {
      state.status = 'loading'
    },
    [confirmSignUp.fulfilled]: (state, action) => {
      state.status = 'succeeded'
    },
    [confirmSignUp.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
      console.log(state.error)
    },

    [signOut.pending]: (state, action) => {
      state.status = 'loading'
    },
    [signOut.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.data.signedIn = false
    },
    [signOut.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
      console.log(state.error)
    },

  },
})

export default authSlice.reducer
export const selectCurrentUser = state => state.auth.data
