import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import songsReducer from "../reducers/setSongs";
import songSelectedReducer from "../reducers/songSelected";

const rootReducer = combineReducers({
  main: mainReducer,
  songs: songsReducer,
  songSelected: songSelectedReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
