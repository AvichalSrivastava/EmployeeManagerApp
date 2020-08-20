import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Login from './components/Login';

 const RouterComponent = () =>
 {
   return (
     <Router>
     <Scene key="root">
       <Scene key="login" component={Login} title="Login"/>
      </Scene>
     </Router>
   );
 };
 export default RouterComponent;
