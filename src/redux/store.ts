import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from './slice/counterSlice';
import musicReducer from './slice/musicSlice';
import modalReducer from './slice/modalSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  music: musicReducer,
  modal: modalReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;