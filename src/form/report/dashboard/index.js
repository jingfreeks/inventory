import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Textbox, Button } from '../../../component/common';
import { Container, Content,Card,CardSection } from '../../../component';
import styles from './style';

export default class SetupDashBoard extends Component {

    static navigationOptions = {
        title: 'TRANSACTION',
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
        this.props.navigation.navigate('DashBoard'); 
    }

    _onReleasing=()=>{
        this.props.navigation.navigate('ReportReleasing'); 
    }

    _onRecieving=()=>{
        this.props.navigation.navigate('ReportRecieving'); 
    }

    _onProductList=()=>{    
        this.props.navigation.navigate('ReportProduct'); 
    }
    _onInventoryBalance=()=>{
        ReportInvBalance
        this.props.navigation.navigate('ReportProduct'); 
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.textbox}>
                    <Button onPress={() => this._onRecieving()}>
                        RECIEVING
                    </Button>
                </View>
                <View style={styles.textbox}>
                    <Button onPress={() => this._onReleasing()}>
                        RELEASING
                    </Button>
                </View>
                <View style={styles.textbox}>
                    <Button onPress={() => this._onProductList()}>
                        PRODUCT LIST
                    </Button>
                </View>
                <View style={styles.textbox}>
                    <Button onPress={() => this._onLogout()}>
                        INVENTORY BALANCE
                    </Button>
                </View>
                <View style={styles.textbox}>
                    <Button onPress={() => this._onLogout()}>
                        EXIT
                    </Button>
                </View>
            </View>
        );
    }    
}