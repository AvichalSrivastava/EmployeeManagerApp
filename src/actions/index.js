import firebase from 'firebase';
import {EMAIL_CHANGE,
      PASSWORD_CHANGE,
      USER_LOGIN_SUCCESS,
      USER_LOGIN_FAIL,
      LOGIN_START
    } from './types';

export const emailChanged = text =>
{
  return{
    type : EMAIL_CHANGE,
    payload : text
  };
};

export const passwordChanged =( text )=>
{
  return{
    type: PASSWORD_CHANGE,
    payload: text
  };
};

export const loginUser = (email,password)=>
{
  return (dispatch) => {
  dispatch({type:LOGIN_START});
  
  firebase.auth().signInWithEmailAndPassword(email,password)
  .then( user => userLoginSuccess(dispatch,user)).catch(()=>{
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(user=> userLoginSuccess(dispatch,user)).catch(()=> userLoginFail(dispatch));
  });
  };
};

const userLoginSuccess = (dispatch, user) =>
{
  dispatch({type: USER_LOGIN_SUCCESS, payload: user});
};
const userLoginFail = (dispatch) =>
{
  dispatch({type: USER_LOGIN_FAIL, payload:'Authentication Failed.'});
};
