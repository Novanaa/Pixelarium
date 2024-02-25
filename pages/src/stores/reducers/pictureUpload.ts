import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface PictureUploadState {
  started: boolean;
  progress: number;
  imageBlobSrc: string;
}

const initialState: PictureUploadState = {
  started: false,
  imageBlobSrc: "",
  progress: 0,
};

const pictureUploadSlice = createSlice({
  initialState,
  name: "picture_upload",
  reducers: {
    gePictureUploadState: (state) => state,
    setPictureUploadStartedState: (state, action: PayloadAction<boolean>) => {
      state.started = action.payload;
    },
    setPictureUploadImageBloblSrcState: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.imageBlobSrc = action.payload;
    },
    setPictureUploadProgressState: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    },
  },
});

export const { gePictureUploadState, setPictureUploadStartedState, setPictureUploadImageBloblSrcState, setPictureUploadProgressState } =
  pictureUploadSlice.actions;

export default pictureUploadSlice.reducer;
