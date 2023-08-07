import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStocks = createAsyncThunk("stocks/fetchStocks", async () => {
  try {
    const response = await axios.get(
      "https://financialmodelingprep.com/api/v3/company/stock/list?apikey=79681a1e0a6c83847d20397fc5bc9e96"
    );

    return response.data.symbolsList;
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
});

const stocksSlice = createSlice({
  name: "stocks",
  initialState: {
    data: [],
    filteringData: [],
    loading: false,
    error: null,
    complete: false,
    compledetd: false,
  },
  reducers: {
    setFilteringData: (state, action) => {
      state.filteringData = action.payload;
      state.completed = true;
    },
  },
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
export const { setFilteringData } = stocksSlice.actions;
export default stocksSlice.reducer;
//==============================================================
