import { createAsyncThunk, createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { loginUserPayload, User } from '../../models/User';

import axios from 'axios';

interface AuthenticationSliceState {
  loggedInUser: User | undefined;
  loading: boolean;
  error: boolean;
  registerSuccess: boolean;
}

const initialState: AuthenticationSliceState = {
  loggedInUser: undefined,
  loading: false,
  error: false,
  registerSuccess: false
};

export const loginuser = createAsyncThunk(
    'authe/login',
    async (user:loginUserPayload , thunkAPI) => {
        try {
            const req = await axios.post('http://localhost:8000/auth/login', user);
            return req.data.user;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const AuthenticationSlice = createSlice({
    name : 'authentication',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        //pending logic 
        builder.addCase(loginuser.pending, (state) => {
            state = {
                ...state,
                loading: true,
                error: false
            }
            return state;
        });
        //resolved logic
        builder.addCase(loginuser.fulfilled, (state , action) => {
            state = {
                ...state,
                loading: false,
                error: false,
                loggedInUser: action.payload
            }
            return state;
        })
        //rejected logic
        builder.addCase(loginuser.rejected, (state) => {
            state = {
                ...state,
                loading: false,
                error: true
            }
            return state;
        })
    }
});

// eslint-disable-next-line no-empty-pattern
export const {} = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;