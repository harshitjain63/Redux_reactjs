// src/redux/reducers.ts
import { FETCH_STATS_REQUEST, FETCH_STATS_SUCCESS, FETCH_STATS_FAILURE } from './actions';

const initialState = {
  loading: false,
  data: null,
  error: '',
};

// Reducer
export const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_STATS_REQUEST:
      return { ...state, loading: true };
    case FETCH_STATS_SUCCESS:
      return { ...state , loading: false, data: action.payload, error: '' };
    case FETCH_STATS_FAILURE:
      return { loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};
