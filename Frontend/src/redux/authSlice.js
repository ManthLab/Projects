import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.played;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

//Export the actions.
export const { setLoading, setUser } = authSlice.actions;

//Export the reducer.
export default authSlice.reducer;

//Eport the authSlice if needed.
export const authSliceReducer = authSlice.reducer; // Addthis line if you need to export the slice.
