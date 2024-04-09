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
    toggleMenuModal: (state) => {
      state.menuModal = !state.menuModal;
    },
    toggleSearchModal: (state) => {
      state.searchModal = !state.searchModal;
    },
    toggleThemeModal: (state) => {
      state.themeModal = !state.themeModal;
    },
    toggleMusicModal: (state) => {
      state.musicModal = !state.musicModal;
    },
  },
});

export const { toggleMenuModal, toggleSearchModal, toggleThemeModal, toggleMusicModal } = modalSlice.actions;
export default modalSlice.reducer;
