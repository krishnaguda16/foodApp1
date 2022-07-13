import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/loginSlice'

export default configureStore({
	reducer: {
        auth: authReducer
    },
});