import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: { userName: null ,isActive:true},
    reducers: {
        login: (state, action) => {
            state.userName = action.payload;
        },
        delete: (state) => {
            state.isActive = false;
        }
    },
});

/*const login = userSlice.actions.login;
export login;*/
export const {login} = userSlice.actions;

export default userSlice.reducer;
