import { configureStore } from "@reduxjs/toolkit";
import counterRedues from "./Features/Counter/CounterSlise"
const store = configureStore({
    reducer:{
        counter: counterRedues,
    },

})
export default store;