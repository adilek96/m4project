import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balanceSlice";
import stocksSlice from "./stocksSlice";
import paginationSlice from "./paginationSlice";
import searchSlice from "./searchSlice";
import buySlice from "./buySlice";
import userStockSlice from "./userStockSlice";

const store = configureStore({
  reducer: {
    balance: balanceReducer,
    stocks: stocksSlice,
    pagination: paginationSlice,
    search: searchSlice,
    buy: buySlice,
    userStock: userStockSlice,
  },
});

export default store;
