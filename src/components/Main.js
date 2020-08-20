import React ,{Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import  Card from './common/Card';
import CardItem from './common/CardItem';
import Button from './common/Button';
import Input from './common/Input';
import ActivityIndicat from './common/ActivityIndicat';
import axios from 'axios';


class Main extends Component
{
  logout(props)
  {
    console.log(props);
  }
  render()
  {
    return(
      <Card>
      <CardItem>
        <Text style={styles.buttonText}>Hello</Text>
        <Text style={styles.buttonText}>{props}</Text>
      </CardItem>
      <CardItem>
      <Button
       text="Logout"
       onPress={this.logout()}
       />
      </CardItem>
      </Card>
      );
  }

}

const styles = {
  buttonText : {
    fontSize : 16,
    alignSelf:'center',
    color:'#007aff',
    fontWeight : '600',
    paddingTop:10,
    paddingBottom:10
  }};
export default Main;
