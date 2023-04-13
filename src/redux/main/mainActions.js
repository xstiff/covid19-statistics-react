import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.covid19api.com/';
// + login
//https://api.covid19api.com/



export const requestWorldSummary = createAsyncThunk(
    'main/requestWorldSummary',
    async (_ ,{rejectWithValue}) => {
        try {
            const response = await axios.get(API_URL + `summary`)
            if (response.status === 200) {
                return response.data;
            }
            else {
                return rejectWithValue({status: response.status, message: response.data.message});
            }
        }
        catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue({
                    status: error.response.status,
                    message: error.response.data.message
                })
            } else { 
                return rejectWithValue(({
                    status: error.response?.status,
                    message: error.message
                }))
            }
        }
    }
)