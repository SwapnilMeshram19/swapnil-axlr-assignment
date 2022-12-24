import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { apiSlice } from "../features/apiSlice"
import loggedInSlice from '../features/loggedInSlice';


const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    loggedIn: loggedInSlice,

})


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;