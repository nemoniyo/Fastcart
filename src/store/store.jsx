import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducers/todoSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})