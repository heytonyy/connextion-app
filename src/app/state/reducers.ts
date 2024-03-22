import { createSlice } from "@reduxjs/toolkit";
import { StoreState } from "./types";
import { combineReducers } from "redux";
import cardsReducer from "@/state/cardsReducer";

const initialState: StoreState = {
  cards: [],
  mode: "light",
};

export const storageSlice = createSlice({
  name: "client-storage",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

const rootReducer = combineReducers({
  storage: storageSlice.reducer,
  cards: cardsReducer,
});

export const { setMode } = storageSlice.actions;
export default rootReducer;
