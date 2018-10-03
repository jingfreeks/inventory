import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Textbox, Button } from '../../../component/common';
import { Container, Content,Card,CardSection } from '../../../component';
import styles from './style';

export default class SetupDashBoard extends Component {

    static navigationOptions = {
        title: 'SETUPS',
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

    _onCategory=()=>{
        this.props.navigation.navigate('Category'); 
    }

    _onInvType=()=>{
        console.log('test')
        this.props.navigation.navigate('Invtypes'); 
        //this.props.navigation.navigate('Product'); 
    }

    _onProduct=()=>{   
        this.props.navigation.navigate('Product'); 
        
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.textbox}>
                    <Button onPress={() => this._onCategory()}>
                        CATEGORY
                    </Button>
                </View>
                <View style={styles.textbox}>
                    <Button onPress={() => this._onInvType()}>
                        INVENTORY TYPE
                    </Button>
                </View>
                <View style={styles.textbox}>
                    <Button onPress={() => this._onProduct()}>
                        PRODUCT
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