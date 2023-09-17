import { createAsyncThunk } from "@reduxjs/toolkit";
import {login as loginService} from './service';

const login = createAsyncThunk("auth/login", async ({ email, password }) => {
    return loginService(email, password);
});


export { login };