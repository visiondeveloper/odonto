import { Reducer } from 'redux';
import { LoginsState, LoginsTypes, Login } from './types';

const INITIAL_LOGIN: Login = {
    emailActive: 0,
    createdAt: '',
    updatedAt: '',
    role : '',
    status : 0,
    _id : '',
    name : '',
    email: '',
    password:'',
    __v: 0,
    jwtToken: ''
}

const INITIAL_STATE: LoginsState = {
  data: [],
  error: false,
  loading: false,
  message:  [],  
  login: INITIAL_LOGIN
};

const reducer: Reducer<LoginsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
    case LoginsTypes.LOAD_REQUEST:
      return { ...state, loading: true };

    case LoginsTypes.LOAD_SUCCCES:
      return {
      ...state, loading: false, error: false, data: action.payload.data, login: action.payload.data,
      };

      case LoginsTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true, data: [], login:INITIAL_LOGIN,
      };

      case LoginsTypes.MAKE_LOGIN:
      console.log('entruo redux login');
        return {
        ...state, loading: false, error: true, data: action.payload.data,
        };

    default:
      return state;
  }
};

export default reducer;
