import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: localStorage.getItem("quizData")
    ? JSON.parse(localStorage.getItem("quizData"))
    : null,
};

const usersSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setQuiz: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("quizData", JSON.stringify(action.payload));
    },
    clearQuiz: (state) => {
      state.data = null;
      localStorage.removeItem("quizData");
    },
  },
});

export const { setQuiz, clearQuiz } = usersSlice.actions;
export default usersSlice.reducer;