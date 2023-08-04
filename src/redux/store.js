import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balanceSlice"; // Импортируйте ваш Redux Slice

const store = configureStore({
  reducer: {
    balance: balanceReducer, // Добавьте ваш Redux Slice в объект конфигурации
  },
});

export default store;
