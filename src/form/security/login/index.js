import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Textbox, Button } from '../../../component/common';
import { Container, Content,Card,CardSection } from '../../../component';
import styles from './style';
import actionLogin from '../datas/login/actions';
import config from '../../../global/api/config';


export class Login extends Component {
    static navigationOptions = {
        title: 'LOGIN',
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

    _onlogin=()=>{
        console.log('configgss',config);
        //this.props.navigation.navigate('DashBoard'); 
    }
    
    _onEmailChanged=(text)=>{

    }

    _onPasswordChanged=()=>{

    }
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardSection>
                           <View style={styles.container} >
                               
                           </View> 
                        </CardSection>
                        <CardSection>
                            <View style={styles.textbox}>
                                <Textbox 
                                    label='USERNAME' 
                                    placeholder='USERNAME@email.com' 
                                    secureTextEntry={false} 
                                    value={this.props.username}
                                    onChangeText={this._onEmailChanged.bind(this)}
                                
                                />
                            </View>
                        </CardSection>
                        <CardSection>
                            <View style={styles.textbox}>
                                <Textbox 
                                    label='PASSWORD' 
                                    placeholder='PASSWORD' 
                                    secureTextEntry={true} 
                                    value={this.props.password}
                                    onChangeText={this._onPasswordChanged.bind(this)}
                                />
                            </View>
                        </CardSection>
                        <CardSection>
                            <View style={styles.textbox}>
                                <Button  onPress={() => this._onlogin()}>
                                    login
                                </Button>
                            </View>
                        </CardSection>
                        <CardSection>
                            <View style={styles.textbox}>
                                <Button>
                                    Cancel
                                </Button>
                            </View>
                        </CardSection>
                    </Card>
                </Content>
            </Container>
        );
    }
}
function mapStateToProps(state){
    
        return{
            username:state.security.username,
            password:state.security.password
        }
    }
    
function mapDispatchToProps(dispatch){
        return{
            actions:{
                login: bindActionCreators(CategoryActions, dispatch),
            }
        }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)