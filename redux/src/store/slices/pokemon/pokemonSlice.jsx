import {createSlice} from '@reduxjs/toolkit';

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoading: (state,action) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        }
    }
});
export const {startLoading, setPokemons} = pokemonSlice.actions;
export default pokemonSlice.reducer;