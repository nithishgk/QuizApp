


import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Home from './src/Home';
import Profile from './src/Profile';



const Navigator = createStackNavigator({
    Home: { screen: Home },
    Profile: { screen: Profile },
});


const App = createAppContainer(Navigator);

export default App;