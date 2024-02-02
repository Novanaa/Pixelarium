import { createSlice } from "@reduxjs/toolkit";

interface UserInitialState {
  isLogin: boolean;
}

const userInitialState: UserInitialState = {
  isLogin: false,
};

const user = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    getUserLoginStatus(state: UserInitialState): UserInitialState {
      return state;
    },
  },
});

export const { getUserLoginStatus } = user.actions;

export default user.reducer;
