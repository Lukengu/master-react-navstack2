import React , {Component} from 'react';
import { Text,TextInput, Button, View,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HomePage} from "./HomePage";
import {RegisterPage} from "./RegisterPage";


export class LoginPage extends Component{
    render(){
        return (
            <view style = {Styles .container}>
                <view style = {Styles .textfields}>

                    < TextInput style = {Styles .input}
                                placeholder ="username"
                                returnKeyType = "Next"
                                onSubmitEditing = {() =>this.passwordInput.focus()}
                                keyboardType = "email-address"
                                autoCapitalize = "none"
                                autoCorrect = {false}
                    />


                    < TextInput style = {Styles .input}
                                placeholder ="password"
                                returnKeyType = "go"
                                secureTextEntry
                                ref ={(input) => this.passwordInput = input}
                    />
                    <TouchableOpacity style = {Styles.buttonContainer} onPress ={() => this.props.navigate('HomePage')}>
                        <Text style ={Styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <Button
                        title = "Register Here"
                        color = "#1abc9c"
                        onPress = {() =>this.props.navigation.navigate('RegisterPage')}
                    ></Button>
                </view>
            </view>
        );
    }
}

export default class App extends Component{
    render(){
        return (
            <NavigationContainer>
                <AppStackNavigator.Navigator>
                    <AppStackNavigator.Screen name="LoginPage" component={LoginPage} />
                    <AppStackNavigator.Screen name="HomePage" component={HomePage} />
                    <AppStackNavigator.Screen name="RegisterPage" component={RegisterPage} />
                </AppStackNavigator.Navigator>
            </NavigationContainer>
        );
    }
}

const AppStackNavigator = createStackNavigator();

const Styles = {
    container : {
        padding : 20,
        flex :1,
        backgroundColor : '#ecf0f1',
        justifyContent : 'center',
        alignItems : 'stretch'
    },
    input : {
        paddingLeft : 20,
        borderRadius : 50,
        height: 50,
        fontSize : 25,
        backgroundColor : 'white',
        borderColor : '#1abc9c',
        borderWith : 1,
        marginBotton : 20,
        color : '#34495e'
    },
    buttonContainer : {
        height : 50,
        borderRadius : 50,
        backgroundColor : '1abc9c',
        paddingVertical : 10,
        justifyContent : 'center'
    },
    buttonText : {
        textAlign : 'center',
        color : '#ecf0f1',
        fontSize : 20

    },
}
