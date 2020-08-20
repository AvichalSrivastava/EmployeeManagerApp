import {EMAIL_CHANGE,
      PASSWORD_CHANGE,
      USER_LOGIN_SUCCESS,
      USER_LOGIN_FAIL,
      LOGIN_START
    } from '../actions/types';
const INITIAL_STATE = {
  email:'',
  password:'',
  user:null,
  error:'',
  loading:false};

export default (state=INITIAL_STATE,action) =>
{
  switch(action.type)
  {
    case EMAIL_CHANGE :
    return {...state, email: action.payload};

    case PASSWORD_CHANGE:
    return{...state, password:action.payload};

    case LOGIN_START:
    return{...state,...INITIAL_STATE, loading:true};

    case USER_LOGIN_SUCCESS:
    return {...state, user: action.payload , error:'', loading:false};

    case USER_LOGIN_FAIL:
    return{...state, error:action.payload, user:null, loading:false};

    default:
    return state;
  }
};
