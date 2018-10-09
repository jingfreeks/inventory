
import React, { Component } from 'react';
import { Text, View,FlatList } from 'react-native';
import { Textbox, Button } from '../../../component/common';
import { Container, Content,Card,CardSection } from '../../../component';
import ProductForm from './forms';
import { List, ListItem,Avatar } from "react-native-elements";
import * as InvtypeActions from '../datas/type/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class Invtype extends Component {
    static navigationOptions = {
        title: 'INVENTORY TYPE',
        headerStyle: {
          backgroundColor: 'white'
        },
        headerTitleStyle :{
            alignSelf: 'center',
            width: '90%',
            textAlign: 'center',
        },

    }

    componentDidMount(){
        this._fetchData();
    }

    _fetchData=()=>{

        this.props.actions.invtype.get();
    }
    
    _keyExtractor = (item, index) => item.code;
    
    
    render() {
        const {data,status}=this.props.invtype;
        return(
            <FlatList
                data={data}
                keyExtractor={this._keyExtractor}
                renderItem={({ item }) => (
                    <ListItem
                        roundAvatar
                        title={`${item.code}`}
                        subtitle={item.name}
                        avatar={<Avatar
                            medium
                            rounded
                            title={item.code}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />}
                    />
                )}
            />
        );
    }    
}

function mapStateToProps(state){
    console.log('statessssssssss',state);
    return{
        invtype:state.setups.invtype,
    }
}
    
function mapDispatchToProps(dispatch){
        return{
            actions:{
                invtype: bindActionCreators(InvtypeActions, dispatch),
            }
        }
}
    
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Invtype)