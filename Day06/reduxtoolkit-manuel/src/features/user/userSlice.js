import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getUser = createAsyncThunk(
    'user/getUser',
    async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await response.json();
        return data[0].name;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: { userName: null, isActive: true, error: null, status: 'idle' },
    reducers: {
        login: (state, action) => {
            state.userName = action.payload;
        },
        deleteUser: (state) => {
            state.isActive = false;
            state.userName = "Deleted!";
        }
    },
    extraReducers: {
        //GET USER
        [getUser.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getUser.fulfilled]: (state, action) => {
            state.status = 'success';
            state.userName = action.payload;
        },
        [getUser.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        }
    }
});

/*const login = userSlice.actions.login;
export login;*/
export const { login, deleteUser } = userSlice.actions;

export default userSlice.reducer;
