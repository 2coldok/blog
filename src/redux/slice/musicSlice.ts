import { createSlice } from "@reduxjs/toolkit";

interface IMusicState {
  toggle: boolean;
  url: string;
}

const initalMusicState: IMusicState = {
  toggle: false,
  url: '',
};

const musicSlice = createSlice({
  name: 'music',
  initialState: initalMusicState,
  reducers: {
    musicOn: (state) => {
      state.toggle = true;
    },
    musicOff: (state) => {
      state.toggle = false;
    },
    setUrl: (state, action) => {
      state.url = action.payload;
    }
  },
});

export const { musicOn, musicOff, setUrl } = musicSlice.actions;
export default musicSlice.reducer;