import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  isSidebarOpen: boolean;
  isSidebarSearchOpen: boolean;
}

const sidebarInitialState: SidebarState = {
  isSidebarOpen: false,
  isSidebarSearchOpen: false,
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
    getSidebarSearchIsOpenState: (state) => {
      return state;
    },
    setSidebarSearchIsOpenState: (state, action: PayloadAction<boolean>) => {
      state.isSidebarSearchOpen = action.payload;
    },
  },
});

export const {
  getSidebarIsOpenState,
  setSidebarIsOpenState,
  getSidebarSearchIsOpenState,
  setSidebarSearchIsOpenState,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
