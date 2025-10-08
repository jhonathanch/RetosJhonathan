import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice.ts';

export const store = configureStore({
    reducer: {
        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(todosApi.middleware),
});