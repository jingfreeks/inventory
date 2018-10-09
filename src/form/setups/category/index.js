
import React, { Component, PureComponent } from 'react';
import { Text, View,FlatList,StyleSheet } from 'react-native';
import { List, ListItem,Avatar } from "react-native-elements";
import { Container, Content,Card,CardSection } from '../../../component';
import CategoryForm from './forms';
import * as CategoryActions from '../datas/category/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

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
        console.log('loogggggggssssssss',this.props.category.status);
        data=this.props.category.data;
        return(

        <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
            {/* Rest of the app comes ABOVE the action button component !*/}

            <ActionButton buttonColor="rgba(231,76,60,1)">
                <ActionButton.Item buttonColor='#9b59b6' title="New Record" onPress={() => console.log("notes tapped!")}>
                    <Icon name="md-create" style={styles.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>
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

                </View>
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