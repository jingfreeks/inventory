
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
            showForm:false,
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

        this.props.actions.category.get({accesstoken:this.props.accesstoken.access_token});
    }


    _renderItem = ({item}) => (
        <Category
          id={item.id}
          onPressItem={this._onPressItem}
          //selected={!!this.state.selected.get(item.id)}
          title={item.title}
        />
      );
    
    _addCategory=()=>{
        console.log("notes tapped!");
        this.setState({
            showForm:true,
        })
    }
    _keyExtractor = (item, index) => item.code;

    render() {
        //console.log('loogggggggssssssss',this.props.accesstoken);
        const data=this.props.category.data;
        return(

            <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
                { this.props.category.data ?
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

    return{
        category:state.setups.category,
        accesstoken:state.security.login.accesstoken,
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