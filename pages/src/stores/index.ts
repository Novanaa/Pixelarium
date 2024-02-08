import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";
import docsSidebarReducer from "./reducers/docsSidebar";

const store = configureStore({
  reducer: {
    user: userReducer,
    docsSidebar: docsSidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
