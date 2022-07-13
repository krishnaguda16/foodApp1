import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const authSlice = createSlice({
    name:'auth',
    initialState: {
        loading: true,
        data: [],
        error: false,
    },
    reducers: {
        
    },
})

export default authSlice.reducer;