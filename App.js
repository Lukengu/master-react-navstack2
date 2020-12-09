import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import {LoginPage} from "./LoginPage";
import {HomePage} from "./HomePage";
import {RegisterPage} from "./RegisterPage";





const RootStack = createStackNavigator();

export default class App extends React.Component {
  render(){
    return (
        <NavigationContainer>
            <RootStack.Navigator>
              <RootStack.Screen name="LoginPage" component={LoginPage} />
              <RootStack.Screen name="HomePage" component={HomePage} />
              <RootStack.Screen name="RegisterPage" component={RegisterPage} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
