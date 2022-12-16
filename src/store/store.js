import { configureStore } from "@reduxjs/toolkit";
import panierReducer from "../feature/PanierSlice";
import houseReducer from "../feature/HouseSlice";

export default configureStore({
    reducer: {
        panier: panierReducer,
        house: houseReducer
    },
    // devTools: false,
})