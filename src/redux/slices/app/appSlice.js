import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    config: undefined
}

export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        updateAppConfig: (state, action) => {
            state.config = action.payload.config;
        }
    },
});

export const {
    updateAppConfig,
} = appSlice.actions;

export default appSlice.reducer;