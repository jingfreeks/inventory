
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Textbox, Button } from '../../../component/common';
import { Container, Content,Card,CardSection } from '../../../component';


export default class Login extends Component {
    static navigationOptions = {
        title: 'RECIEVING CATEGORY',
        headerStyle: {
          backgroundColor: 'white'
        },
        headerTitleStyle :{
            alignSelf: 'center',
            width: '90%',
            textAlign: 'center',
        },

    }
    render() {
        return(
            <View>
                <Textbox>tests1</Textbox>
            </View>
        );
    }    
}