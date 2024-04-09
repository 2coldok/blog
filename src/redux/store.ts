import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from './slice/counterSlice';
import musicReducer from './slice/musicSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  music: musicReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;