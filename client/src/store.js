import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice.js";
import usersReducer from "./slices/usersSlice.js";
import sceneReducer from "./slices/sceneSlice.js";
import postReducer from "./slices/postSlice.js";
import quizReducer from "./slices/quizSlice.js";
import { emptySplitApi } from "./slices/api/emptySplitApi.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    scene: sceneReducer,
    post: postReducer,
    quiz: quizReducer,
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplitApi.middleware),
  devTools: true,
});