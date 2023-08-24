import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = 'http://localhost:3002';


const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: []
    },
    reducers: {
        getAllPostsTodo(state,action){
            state.posts = action.payload;
        },
        addNewPostsTodo(state,action){
            state.posts = [action.payload, ...state.posts];
        }
    }
});

export const getAllPosts = () => async(dispatch) => {
    try {
        const response = await axios.get(`${BASE_URL}/post`);
        // console.log(response.data);
        if (response.data) {
            dispatch(getAllPostsTodo(response.data));
        }
    } catch (error) {
        console.log(error);
    } 
};

export const createPost = (data) => async (dispatch) => {
    try {
        const response = await axios.post(`${BASE_URL}/post/create`, data);
        // console.log(response.data);
        if (response.data) {
            dispatch(addNewPostsTodo(response.data));
        }
    } catch (error) {
        console.log(error);
    }
};

export const {addNewPostsTodo, getAllPostsTodo} = postSlice.actions;
export default postSlice;