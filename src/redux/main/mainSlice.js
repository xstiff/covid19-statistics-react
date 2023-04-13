import {
    createSlice
} from '@reduxjs/toolkit';
import {
    requestWorldSummary
} from './mainActions';


const initialState = {
    sortType: 'Country', // country / totalconfirmed / totaldeaths / newconfirmed / newdeaths / 
    sortDirection: 'up', // up

    isFiltered: false,
    filteredCountries: [],

    summary: {},

    loading: false,
    error: null,
    success: false,
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setFiltered: (state, {
            payload
        }) => {
            state.filteredCountries = payload;
            state.isFiltered = true;
        },
        clearFilter: (state) => {
            state.filteredCountries = [];
            state.isFiltered = false;
        },
        setSortType: (state, {
            payload
        }) => {
            if (state.sortType === payload) {
                state.sortDirection = state.sortDirection === 'up' ? 'down' : 'up';
            }

            state.sortType = payload;
        },



    },
    extraReducers: (builder) => {
        builder
            .addCase(requestWorldSummary.pending, (state, {
                payload
            }) => {
                console.log('requestWorldSummary.pending');


                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(requestWorldSummary.fulfilled, (state, {
                payload
            }) => {
                console.log('requestWorldSummary.fulfilled');
                state.summary = payload

                state.loading = false;
                state.error = null;
                state.success = true;
            })
            .addCase(requestWorldSummary.rejected, (state, {
                payload
            }) => {
                console.log('requestWorldSummary.rejected: ', payload);



                state.loading = false;
                state.error = payload;
                state.success = false;
            })

    },
});


export default mainSlice.reducer;

export const {
    setFiltered,
    clearFilter,
    setSortType
} = mainSlice.actions;