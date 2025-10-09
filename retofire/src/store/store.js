import{configureStore } from   "@reduxjs/toolkit";
import { auth } from "../firebase/config";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
});