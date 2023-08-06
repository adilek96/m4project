import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStocks = createAsyncThunk("stocks/fetchStocks", async () => {
  try {
    const response = await axios.get(
      "https://financialmodelingprep.com/api/v3/company/stock/list?apikey=41655d985fdf712790a4451f63006794"
    );

    return response.data.symbolsList;
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
});

const stocksSlice = createSlice({
  name: "stocks",
  initialState: {
    data: {},
    loading: false,
    error: null,
    complete: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStocks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStocks.fulfilled, (state, action) => {
        state.loading = false;
        state.complete = true;
        state.data = action.payload;
      })
      .addCase(fetchStocks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default stocksSlice.reducer;
//==============================================================
