import { Reducer } from 'redux';
import { CategoriesState, CategoriesTypes } from './types';

const INITIAL_STATE: CategoriesState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<CategoriesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case CategoriesTypes.LOAD_SUCCCES:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case CategoriesTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true, data: [],
      };
    default:
      return state;
  }
};

export default reducer;
