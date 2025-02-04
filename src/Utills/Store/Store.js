import { configureStore } from "@reduxjs/toolkit";
import myReducer from '../Slice/Slice';
const store = configureStore({
    reducer:{
        Data: myReducer,
    },
});
export default store;