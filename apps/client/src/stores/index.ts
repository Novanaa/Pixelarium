import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";
import pictureUpload from "./reducers/picture-upload";

const store = configureStore({
  reducer: {
    user: userReducer,
    pictureUpload: pictureUpload,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
