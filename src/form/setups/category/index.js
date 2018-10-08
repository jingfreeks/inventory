
import React, { Component, PureComponent } from 'react';
import { Text, View,FlatList } from 'react-native';
import { List, ListItem,Avatar } from "react-native-elements";
import { Container, Content,Card,CardSection } from '../../../component';
import CategoryForm from './forms';
import * as CategoryActions from '../datas/category/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class Category extends Component {

    constructor(props){
        
        super(props);

        this.state={
            loading:false,
            data:[],
            page:1,
            seed:1,
            error: null,
            refreshing: false,
        };
    }

    static navigationOptions = {
        title: 'PRODUCT CATEGORY',
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

        /*const {page, seed}=this.state;
        const url='http://192.168.1.200:8080/inventory/api/category/category.json';

        return fetch(url)
        .then((res) => res.json())
        .then((res) => {
            this.setState({
                data: page===1 ? res.data : [...this.state.data,...res.data],
                error: res.error || null,
                loading:false,
                refreshing:false
            });
            console.log('aaaaaa',this.state);
        })
        .catch((error) =>{
            this.setState({
                error, loading:false
            });
        });*/

        this.props.actions.category.get();
    }


    _renderItem = ({item}) => (
        <Category
          id={item.id}
          onPressItem={this._onPressItem}
          //selected={!!this.state.selected.get(item.id)}
          title={item.title}
        />
      );

    _keyExtractor = (item, index) => item.code;

    render() {
        console.log('loogggggggssssssss',this.props.category);
        data=this.props.category.data;
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

    return{
        category:state.setups.category,
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions:{
            category: bindActionCreators(CategoryActions, dispatch),
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Category)