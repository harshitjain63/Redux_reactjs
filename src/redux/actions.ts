
import { Dispatch } from 'redux';
import { fetchSalesData } from '../services/api';

// Action Types
export const FETCH_STATS_REQUEST = 'FETCH_STATS_REQUEST';
export const FETCH_STATS_SUCCESS = 'FETCH_STATS_SUCCESS';
export const FETCH_STATS_FAILURE = 'FETCH_STATS_FAILURE';

// Action Creators
export const fetchStatsRequest = () => ({
    type: FETCH_STATS_REQUEST,
});

export const fetchStatsSuccess = (data: any) => ({
    type: FETCH_STATS_SUCCESS,
    payload: data,
});

export const fetchStatsFailure = (error: string | unknown) => ({
    type: FETCH_STATS_FAILURE,
    payload: error,
});


export const fetchStatistics = () => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchStatsRequest()); // Start loading
        try {
            const response = await fetchSalesData(); // Call the API
            dispatch(fetchStatsSuccess(response.data)); // Dispatch success
        } catch (error) {
            dispatch(fetchStatsFailure(error)); // Dispatch error
        }
    };
};

