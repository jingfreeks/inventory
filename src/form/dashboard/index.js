import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Textbox, Button } from '../../component/common';
import { Container, Content,Card,CardSection } from '../../component';
import styles from './style';

export default class dashBoard extends Component {

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
          backgroundColor: 'white'
        },
        headerTitleStyle :{
            alignSelf: 'center',
            width: '90%',
            textAlign: 'center',
        },
        headerLeft: null,

    }

    _onLogout=()=>{
        this.props.navigation.navigate('Login'); 
    }
    _onTransaction=()=>{
        this.props.navigation.navigate('TransDashBoard'); 
    }
    _onSetup=()=>{
        this.props.navigation.navigate('SetupDashBoard'); 
    }
    _onReport=()=>{
        this.props.navigation.navigate('ReportDashBoard'); 
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.textbox}>
                    <Button onPress={() => this._onReport()}>
                        Report
                    </Button>
                </View>
                <View style={styles.textbox}>
                    <Button onPress={() => this._onTransaction()}>
                        Transaction
                    </Button>
                </View>
                <View style={styles.textbox}>
                    <Button onPress={()=>this._onSetup()}>
                        Setups
                    </Button>
                </View>
                <View style={styles.textbox}>
                    <Button onPress={() => this._onLogout()}>
                        Logout
                    </Button>
                </View>
            </View>
        );
    }    
}