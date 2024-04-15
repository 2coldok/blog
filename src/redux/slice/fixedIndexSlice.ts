import { createSlice } from "@reduxjs/toolkit";

interface IFixedIndex {
  value: number;
}

const initialFixedIndexState: IFixedIndex = {
  value: 0,
}; 

const fixedIndexSlice = createSlice({
  name: 'fixedIndex',
  initialState: initialFixedIndexState,
  reducers: {
    setFixedIndex: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFixedIndex } = fixedIndexSlice.actions;
export default fixedIndexSlice.reducer;
