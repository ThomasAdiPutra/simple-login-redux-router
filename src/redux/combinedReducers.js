import { combineReducers } from '@reduxjs/toolkit';
import authSlice from '../pages/Auth/redux/slice';

const reducers = combineReducers({
    authSlice,    
});

export default reducers;