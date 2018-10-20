
import React, { Component } from 'react';
import { Text, View,FlatList,StyleSheet } from 'react-native';
import { Textbox, Button } from '../../../component/common';
import { Container, Content,Card,CardSection } from '../../../component';
import ProductForm from './forms';
import { List, ListItem,Avatar } from "react-native-elements";
import * as InvtypeActions from '../datas/type/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

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

    constructor(props){
        
        super(props);

        this.state={
            loading:false,
            data:[],
            page:1,
            seed:1,
            error: null,
            refreshing: false,
            showForm:false,
        };
    }

    componentDidMount(){
        this._fetchData();
    }

    _fetchData=()=>{

        this.props.actions.invtype.get();
    }
    
    _keyExtractor = (item, index) => item.code;
    
    _addInvtype=()=>{
        this.setState({
            showForm:true,
        });      
    }
    render() {
        const {data,status}=this.props.invtype;

        return(
            <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
                { data ?
                        <View>
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
                                <ActionButton buttonColor="rgba(231,76,60,1)">
                                    <ActionButton.Item buttonColor='#9b59b6' title="New Record" onPress={() => this._addCategory()}>
                                        <Icon name="md-create" style={styles.actionButtonIcon} />
                                    </ActionButton.Item>
                                </ActionButton>
                        </View>
                    :
                        <ActionButton buttonColor="rgba(231,76,60,1)">
                            <ActionButton.Item buttonColor='#9b59b6' title="New Record" onPress={() => this._addCategory()}>
                                <Icon name="md-create" style={styles.actionButtonIcon} />
                            </ActionButton.Item>
                        </ActionButton>              
                }
                {
                    this.state.showForm ?
                        <CategoryForm visible={true}/>
                    :
                        null
                }
            </View>
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