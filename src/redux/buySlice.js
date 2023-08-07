import { createSlice } from "@reduxjs/toolkit";

const buySlice = createSlice({
  name: "buy",
  initialState: {
    item: {},
  },
  reducers: {
    setItem: (state, actions) => {
      state.item = actions.payload;
    },
  },
});

export const { setItem } = buySlice.actions;
export default buySlice.reducer;
