import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  isProfileSidebarOpen: boolean;
}

const userInitialState: UserState = {
  isProfileSidebarOpen: false,
};

const user = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    getIsProfileSidebarOpenState: (state) => {
      return state;
    },
    setIsProfileSidebarOpenState: (state, action: PayloadAction<boolean>) => {
      state.isProfileSidebarOpen = action.payload;
    },
  },
});

export const { getIsProfileSidebarOpenState, setIsProfileSidebarOpenState } =
  user.actions;

export default user.reducer;
