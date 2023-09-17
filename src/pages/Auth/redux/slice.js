const { createSlice } = require("@reduxjs/toolkit");
const { login } = require("./action");

// create slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    error: null,
    loading: false,
  },
  reducers: {
    logout: (state) => {
        state.user = null;
        state.token = null;
        state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.user = null;
    });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
