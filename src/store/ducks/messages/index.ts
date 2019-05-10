import { Reducer } from 'redux';
import { MessagesState, MessagesTypes } from './types';

const INITIAL_STATE: MessagesState = {
  messages: [],
  data: []
};

const reducer: Reducer<MessagesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
    case MessagesTypes.GET_MESSAGE:
      return { ...state };

    case MessagesTypes.SET_MESSAGE:
      return {
      ...state, data: action.payload.data, messages : action.payload.data
      };

    default:
      return state;
  }
};

export default reducer;
