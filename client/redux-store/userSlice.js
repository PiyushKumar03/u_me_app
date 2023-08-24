import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = 'http://localhost:3002';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: JSON.parse(localStorage.getItem('user'))
    },
    reducers:{
        registerTodo(state,action){
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.user = JSON.parse(localStorage.getItem('user'));

        },
        loginTodo(state,action){
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.user = JSON.parse(localStorage.getItem('user'));

        }
    }
});

export const registerUser = (data) => async (dispatch) => {
    try {
        const response = await axios.post(`${BASE_URL}/user/signup`, data);
        if (response) {
            console.log("User Registering in");
            dispatch(registerTodo(response.data));
        }
    } catch (error) {
        console.log(error);
    }
};

export const loginUser = (data) => async (dispatch) => {
    try {
        console.log(data);
        const response = await axios.post(`${BASE_URL}/user/login`, data);
        if (response.data) {
            console.log("User logging in");
            dispatch(loginTodo(response.data));
        }
        // console.log(response);

    } catch (error) {
        console.log(error);
    }
};

export const fetchUserPost = (data) => async () => {
    try {
        
    } catch (error) {
        console.log(error);
    }
};

export const {registerTodo, loginTodo} = userSlice.actions;

export default userSlice;