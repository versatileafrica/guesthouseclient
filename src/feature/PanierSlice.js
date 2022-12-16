import { createSlice } from "@reduxjs/toolkit";

export const panierSlice = createSlice({
    name: "panier",
    initialState: {
        panier: [],
        historique: [],
        refresh: false
    },
    reducers: {
        recupPan: (state, {payload}) => {
            if(payload){
                state.panier = payload;
            }
        },
        setProductPan: (state, action) => {
            // state.panier.push(action.payload);
            state.panier = [...state.panier,action.payload];
            localStorage.setItem("panier", JSON.stringify(state.panier));
        },
        updateQuantity: (state, {payload}) =>{
            state.panier = state.panier.map((val) => {
                if(val.product_id === payload[1]) {
                    return {
                        ...val,
                        product_quantity: payload[0],
                        total_price: payload[2],
                    };
                } else {
                    return val;
                }
            });
            localStorage.setItem("panier", JSON.stringify(state.panier));
        },
        deleteProduct: (state, {payload}) => {
            state.panier = state.panier.filter((t) => t.product_id !== payload);
            localStorage.setItem("panier", JSON.stringify(state.panier));
        },
        relance: (state, {payload}) => {
            // state.panier = state.panier.filter((t) => t.product_id !== payload);
            state.refresh = payload;
            // localStorage.setItem("panier", JSON.stringify(state.panier));
        },
        recupHistorique: (state, {payload}) =>{
            if(payload){
                state.historique = payload;
            }
        },
        setHistorique: (state, {payload}) =>{
            state.historique = [...state.historique,payload];
            localStorage.setItem("historique", JSON.stringify(state.historique));
        },
        viderHistorique: (state, {payload}) => {
            state.historique = payload;
            localStorage.setItem("historique", JSON.stringify(state.historique));
        },
        updateHistoriqueStatus: (state, {payload}) =>{
            state.historique = state.historique.map((val) => {
                if(val.invoice === payload[1]) {
                    return {
                        ...val,
                        statusCmd: payload[0]
                    };
                } else {
                    return val;
                }
            });
            localStorage.setItem("historique", JSON.stringify(state.historique));
        },
        viderPanier: (state, {payload}) => {
            state.panier = payload;
            localStorage.setItem("panier", JSON.stringify(state.panier));
        }
    }
});

export const {setProductPan, recupPan, updateQuantity, deleteProduct, relance, setHistorique, recupHistorique, viderPanier, viderHistorique, updateHistoriqueStatus} = panierSlice.actions;
export default panierSlice.reducer;