import { configureStore } from "@reduxjs/toolkit";
import counterRedues from "./Features/Counter/CounterSlise"
import logger from "./Middlewere/Logger";
const store = configureStore({
  reducer: {
    counter: counterRedues,
  },

  middleware: (getDefaultMiddlewere) =>getDefaultMiddlewere().concat(logger),
});
export default store;