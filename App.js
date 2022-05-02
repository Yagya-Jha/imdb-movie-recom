import * as React from 'react';
import Home from './Screens/Home';
import Popular_movies from './Screens/popular';
import Recomendation from './Screens/recomendation';
import {createStackNavigator} from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import { RFValue } from 'react-native-responsive-fontsize';
import {createMaterialTopTab, createMaterialTopTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
    return (
      <Appcontainer />
    );
  }
}

const Apptopnavigation = createMaterialTopTabNavigator({
  screen1: {screen: Recomendation, navigationOptions: {tabBarLabel: "recomended", tabBarOptions: {tabStyle: {backgroundColor: 'white'}, labelStyle: {color: 'black'}, indicatorStyle: {backgroundColor: 'black'}}}},
  screen2: {screen: Popular_movies, navigationOptions: {tabBarLabel: "Popular", tabBarOptions: {tabStyle: {backgroundColor: 'white'}, labelStyle: {color: 'black'}, indicatorStyle: {backgroundColor: 'black'}}}},
});

const AppStackNavigator = createStackNavigator({
  home: {screen: Home, navigationOptions: {headerShown: false}},
  apptopnav: {screen: Apptopnavigation, navigationOptions: {headerBackTitle: null, headerTitntColor: 'white', headerTitle: 'Recomended Movies', headerTitleStyle: {color: 'white', fontWeight: 'bold', fontSize:RFValue(18)}}}
}, 
{
  initialRouteName: "home"
}
);

const Appcontainer = createAppContainer(AppStackNavigator);