import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balanceSlice"; // Импортируйте ваш Redux Slice
import stocksSlice from "./stocksSlice";
import paginationSlice from "./paginationSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    balance: balanceReducer, // Добавьте ваш Redux Slice в объект конфигурации
    stocks: stocksSlice,
    pagination: paginationSlice,
    search: searchSlice,
  },
});

export default store;
