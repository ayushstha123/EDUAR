/*
 ? LocalStorage stuffs: take user data from api and store them in LocalStorage and auth State and remove from LocalStorage on Logout
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: localStorage.getItem("usersData")
    ? JSON.parse(localStorage.getItem("usersData"))
    : null,
};

const usersSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("usersData", JSON.stringify(action.payload));
    },
    clearUsers: (state) => {
      state.data = null;
      localStorage.removeItem("usersData");
    },
  },
});

export const { setUsers, clearUsers } = usersSlice.actions;
export default usersSlice.reducer;