import React, { Component } from 'react';
import { Text, View,StyleSheet,TouchableHighlight,Modal } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { Textbox, Button } from '../../../component/common';
import t from 'tcomb-form-native';

import {FormModal} from '../../../component';

var Form=t.form.Form;
var Category=t.struct({
    code:t.String,
    name:t.String
});
var options = {
    fields: {
      name: {}
    }
  }; 


export default class CategoryForm extends Component {

    constructor(props){
        
        super(props);

        this.state={
            visible:true
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log('logggssss',nextProps);
        if(this.state.visible !=nextProps.visible){
            this.setState({
                visible:nextProps.visible
            });
        }
    }

    _onInvSave=()=>{
        console.log('clicking here');
        this.setState({
            visible:false
        });
    }

    _onInvClose=()=>{
        console.log('clicking here',this.props);
        this.setState({
            visible:false
        });
    }
    
    render()
    {
        console.log('loggggggggsssss123',this.state.visible)
        return(
            <FormModal visible={this.state.visible}>
                <View style={{flex:2,height:100,marginLeft:5,marginRight:5,justifyContent:'center'}}>
                    <View style={{flex:1,height:100,marginLeft:5,marginRight:5,marginBottom:'40%',marginTop:'40%',backgroundColor:'white'}}>
                        <Form
                            ref="Form"
                            type={Category}
                            options={options}
                        />
                        <View style={{justifyContent: 'center',height:50,}}>
                            <Button onPress={() => this._onInvSave()}>
                                SAVE
                            </Button>
                        </View>
                        <View style={{justifyContent: 'center',height:50,}}>
                            <Button onPress={() => this._onInvClose()}>
                                CLOSE
                            </Button>
                        </View>
                    </View>
                </View>
            </FormModal>

        );

    }
}

const styles = StyleSheet.create({
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
  });