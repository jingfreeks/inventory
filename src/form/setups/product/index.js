
import React, { Component } from 'react';
import { Text, View,FlatList,StyleSheet } from 'react-native';
import { Textbox, Button } from '../../../component/common';
import { Container, Content,Card,CardSection } from '../../../component';
import ProductForm from './forms';
import { List, ListItem,Avatar } from "react-native-elements";
import * as ProductActions from '../datas/product/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export class Product extends Component {
    static navigationOptions = {
        title: 'PRODUCT INFORMATION',
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

        this.props.actions.product.get();
    }
    
    _keyExtractor = (item, index) => item.code;

    _addProduct=()=>{
        this.setState({
            showForm:true,
        });   
    }
    render() {
        //console.log('loogggggggssssssss',this.props.category.status);
        data=this.props.product.data;
        //data={};
        return(
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
            {
                this.state.showForm ?
                    <ProductForm visible={true}/>
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
        product:state.setups.product,
    }
}
    
function mapDispatchToProps(dispatch){
        return{
            actions:{
                product: bindActionCreators(ProductActions, dispatch),
            }
        }
}
    
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Product)