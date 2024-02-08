import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  isSidebarOpen: boolean;
}

const sidebarInitialState: SidebarState = {
  isSidebarOpen: false,
};

const sidebarSlice = createSlice({
  initialState: sidebarInitialState,
  name: "docsSidebar",
  reducers: {
    getSidebarIsOpenState: (state) => {
      return state;
    },
    setSidebarIsOpenState: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { getSidebarIsOpenState, setSidebarIsOpenState } =
  sidebarSlice.actions;

export default sidebarSlice.reducer;
