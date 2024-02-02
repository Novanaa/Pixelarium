import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
    updateUserLoginStatus(
      state: UserInitialState,
      action: PayloadAction<UserInitialState, string>,
    ): UserInitialState {
      return { ...state, isLogin: action.payload.isLogin };
    },
  },
});

export const { getUserLoginStatus, updateUserLoginStatus } = user.actions;

export default user.reducer;
