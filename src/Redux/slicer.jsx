import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null, 
        isAuthenticated: false,
        user: null, //Pour stocker les informations de l'utilisateur
        loading: false,
        error: null,
    },
    reducers: {
        login: (state, action) => {
            state.token = action.payload; // Pour stoker le token
            console.log(state.token)
            state.isAuthenticated = true;
        },

        logout: (state) => {
            state.token = null; //Pour supprimer le token
            state.isAuthenticated = false; 
        },

        setError: (state, action) => {
            state.error = action.payload; //Stocker l'erreur si besoin
        },

        fetchUserRequest: (state) => {
            state.loading = true;
        }, 

        fetchUserSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload; //Pour mettre à jour les données utilisateurs récupérées
        },

        fetchUserFailure: (state, action) => {
            state.data = null;
            state.error = action.payload
        },
    },
});

export const {login, logout, setError, fetchUserRequest, fetchUserSuccess, fetchUserFailure} = authSlice.actions;
export default authSlice.reducer;