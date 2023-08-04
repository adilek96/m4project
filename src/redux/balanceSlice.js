import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// получение баланса из API
export const fetchBalance = createAsyncThunk(
  "balance/fetchBalance",
  async () => {
    try {
      const response = await axios.get(
        "https://5e8da89e22d8cd0016a798db.mockapi.io/users/1"
      );
      return response.data;
    } catch (error) {
      throw new Error("Error fetching data:", error);
    }
  }
);

const balanceSlice = createSlice({
  name: "balance",
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBalance.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBalance.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBalance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default balanceSlice.reducer;
//==============================================================
