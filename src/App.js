import React , {Component} from 'react';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers  from './reducers';
import firebase from 'firebase';
import Login from './components/Login';
import RouterComponent from './Router';
class App extends Component
{
  UNSAFE_componentWillMount()
  {
     const firebaseConfig = {
     apiKey: 'AIzaSyBpIHpHp-tGIxn5ck1IvKdXKoyrey9yhFw',
     authDomain: 'officemanager-1c5b4.firebaseapp.com',
     databaseURL: 'https://officemanager-1c5b4.firebaseio.com',
     projectId: 'officemanager-1c5b4',
     storageBucket: 'officemanager-1c5b4.appspot.com',
     messagingSenderId: '310800420232',
     appId: '1:310800420232:web:71d721cf12c250dd5a7e3d',
     measurementId: 'G-12W745LF95'
     };
     //Initialize Firebase
     firebase.initializeApp(firebaseConfig);
  }
  render()
  {
    const _store = createStore(reducers,{},applyMiddleware(ReduxThunk));
    return(
      <Provider store={_store}>
       <RouterComponent />
      </Provider>
    );
  }
}
export default App;
