import { createAsyncThunk, createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { loginUserPayload, registerUserPayload, User } from '../../models/User';

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

export const registerUser = createAsyncThunk(
    'auth/register',
    async (user: registerUserPayload, thunkAPI) => {
        try {
            const req = await axios.post('http://localhost:8000/auth/register', user);
            return req.data.user;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const AuthenticationSlice = createSlice({
    name : 'authentication',
    initialState,
    reducers: {
        resetRegisterSuccess: (state) => {
            state = {
                ...state,
                registerSuccess: false
            }
            return state;

    },
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

        builder.addCase(registerUser.pending, (state) => {
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
        });

        builder.addCase(registerUser.fulfilled, (state, action) => {
            state = {
                ...state,
                loading: false,
                error: false,
                registerSuccess: true,
                loggedInUser: action.payload
            }
            return state;
        });



        //rejected logic
        builder.addCase(loginuser.rejected, (state) => {
            state = {
                ...state,
                loading: false,
                error: true
            }
            return state;
        })

        builder.addCase(registerUser.rejected, (state) => {
            state = {
                ...state,
                loading: false,
                error: true
            }
            return state;
        });
    }
});

export const {resetRegisterSuccess} = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;