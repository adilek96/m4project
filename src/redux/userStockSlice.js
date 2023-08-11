import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// получение баланса из API
export const fetchUserStock = createAsyncThunk(
  "userStock/fetchUserStock",
  async () => {
    try {
      const response = await axios.get(
        "https://5e8da89e22d8cd0016a798db.mockapi.io/users/1/stocks"
      );
      return response.data;
    } catch (error) {
      throw new Error("Error fetching data:", error);
    }
  }
);

const userStockSlice = createSlice({
  name: "userStock",
  initialState: {
    stock: [],
    loading: false,
    error: null,
    complete: false,
    purchaseSum: 0,
    totalProfit: [],
  },
  reducers: {
    setData: (state, actions) => {
      state.stock.push(actions.payload);
    },
    setPurchaseSum: (state, actions) => {
      state.purchaseSum = actions.payload;
    },
    setTotalProfit: (state, actions) => {
      state.totalProfit = actions.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserStock.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserStock.fulfilled, (state, action) => {
        state.loading = false;
        state.stock = action.payload;
        state.complete = true;
      })
      .addCase(fetchUserStock.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { setData, setPurchaseSum, setTotalProfit } =
  userStockSlice.actions;
export default userStockSlice.reducer;
