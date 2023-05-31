import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

const mystore = configureStore({
    reducer: {
        userReducer,
    },

});

export default mystore;
