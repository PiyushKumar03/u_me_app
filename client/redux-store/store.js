import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import postSlice from './postSlice';

const store = configureStore({
    reducer: {
        userReducer: userSlice.reducer,
        postReducer: postSlice.reducer
    }
});

export default store;