import { createSlice } from "@reduxjs/toolkit";

const buySlice = createSlice({
  name: "buy",
  initialState: {
    item: {},
    totalItem: {},
    complete: false,
  },
  reducers: {
    setItem: (state, actions) => {
      state.item = actions.payload;
    },
    setTotalItem: (state, actions) => {
      state.totalItem = actions.payload;
      state.complete = true;
    },
  },
});

export const { setItem } = buySlice.actions;
export const { setTotalItem } = buySlice.actions;
export default buySlice.reducer;
