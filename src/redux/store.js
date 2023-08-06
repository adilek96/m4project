import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balanceSlice"; // Импортируйте ваш Redux Slice
import stocksSlice from "./stocksSlice";

const store = configureStore({
  reducer: {
    balance: balanceReducer, // Добавьте ваш Redux Slice в объект конфигурации
    stocks: stocksSlice,
  },
});

export default store;
