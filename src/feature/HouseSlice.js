import { createSlice } from "@reduxjs/toolkit";


export const houseSlice = createSlice({
    name: "house",
    initialState: {
        house: [],
        city: []
    },
    reducers: {
        recupHouse: (state, { payload }) => {
            if (payload) {
                state.house = payload;
            }
        },
        recupCity: (state, { payload }) => {
            if (payload) {
                state.city = payload;
            }
        }
    }
});

export const { recupHouse, recupCity } = houseSlice.actions;
export default houseSlice.reducer;