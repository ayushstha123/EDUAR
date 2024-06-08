/*
 ? LocalStorage stuffs: take user data from api and store them in LocalStorage and auth State and remove from LocalStorage on Logout
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: localStorage.getItem("postInfo")
    ? JSON.parse(localStorage.getItem("postInfo"))
    : null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPostData: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("postInfo", JSON.stringify(action.payload));
    },
    clearPostData: (state) => {
      state.data = null;
      localStorage.removeItem("postInfo");
    },
  },
});

export const { setPostData, clearPostData } = postSlice.actions;
export default postSlice.reducer;