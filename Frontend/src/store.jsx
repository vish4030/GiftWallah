import { configureStore } from "@reduxjs/toolkit";

import painting from "./reducers/PaintingReducer";


const store = configureStore({
    reducer:{
        painting:painting
    }
})


export default store;