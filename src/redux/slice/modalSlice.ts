import { createSlice } from "@reduxjs/toolkit";

interface IModalState {
  menuModal: boolean;
  searchModal: boolean;
  themeModal: boolean;
  musicModal: boolean; 
}

const initialModalState: IModalState = {
  menuModal: false,
  searchModal: false,
  themeModal: false,
  musicModal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialModalState,
  reducers: {
    setMenuModal: (state, action) => {
      state.menuModal = action.payload;
    },
    setSearchModal: (state, action) => {
      state.searchModal = action.payload;
    },
    setThemeModal: (state, action) => {
      state.themeModal = action.payload;
    },
    setMusicModal: (state, action) => {
      state.musicModal = action.payload;
    },
  },
});

export const { setMenuModal, setSearchModal, setThemeModal, setMusicModal } = modalSlice.actions;
export default modalSlice.reducer;
