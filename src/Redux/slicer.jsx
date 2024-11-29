import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     isLoggedIn: false,
//     token: null,
//     error: null,
// };

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null, 
        isAuthenticated: false,
    },
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token; // Pour stoker le token
            state.isAuthenticated = true;
        },

        logout: (state) => {
            state.token = null; //Pour supprimer le token
            state.isAuthenticated = false; 
        },

        setError: (state, action) => {
            state.error = action.payload; //Stocker l'erreur si besoin
        },
    },
});

export const {login, logout, setError} = authSlice.actions;
export default authSlice.reducer;