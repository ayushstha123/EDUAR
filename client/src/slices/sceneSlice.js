import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: localStorage.getItem("scene")
    ? JSON.parse(localStorage.getItem("scene"))
    : "sphere",
};

const sceneSlice = createSlice({
  name: "scene",
  initialState,
  reducers: {
    setScene: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("scene", JSON.stringify(action.payload));
    },
    clearScene: (state) => {
      state.data = null;
      localStorage.removeItem("scene");
    },
  },
});

export const { setScene, clearScene } = sceneSlice.actions;
export default sceneSlice.reducer;