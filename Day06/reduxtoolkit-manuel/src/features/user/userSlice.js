import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: { userName: null ,isActive:true},
    reducers: {
        login: (state, action) => {
            state.userName = action.payload;
        },
        deleteUser: (state) => {
            state.isActive = false;
            state.userName = "Deleted!";
        }
    },
});

/*const login = userSlice.actions.login;
export login;*/
export const {login,deleteUser} = userSlice.actions;

export default userSlice.reducer;
