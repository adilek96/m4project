import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "serch",
  initialState: {
    term: "",
  },
  reducers: {
    setTerm: (state, actions) => {
      state.term = actions.payload;
    },
  },
});

export const { setTerm } = searchSlice.actions;
export default searchSlice.reducer;
