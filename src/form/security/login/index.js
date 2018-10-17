import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Textbox, Button } from '../../../component/common';
import { Container, Content,Card,CardSection } from '../../../component';
import styles from './style';
import * as actionLogin from '../datas/login/actions';
import config from '../../../global/api/config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

    _onlogin=async()=>{
        const{username,password}=this.props;
        const payload={
            grant_type:'password',
            client_id:config.clientId,
            client_secret:config.clientSecret,
            username:this.props.username,
            password:this.props.password
        }
        await this.props.actions.login.fetchlogin(payload);
    }
    
    _onEmailChanged=(text)=>{
        this.props.actions.login.emailChanged(text);
    }

    _onPasswordChanged=(text)=>{
        this.props.actions.login.passwordChanged(text);
    }

    _oncancel=()=>{
        console.log('logggggggggggggssssss',this.props);
    }

    componentDidUpdate(prevProps) {

        const access_token=this.props.accesstoken;
        if(access_token){
            return this.props.navigation.navigate('DashBoard'); 
        }

    }


    _showLogin=(props)=>{
            return(
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
                                    <Button onPress={()=>this._oncancel()}>
                                        Cancel
                                    </Button>
                                </View>
                            </CardSection>
                        </Card>
                    </Content>
                </Container>
            );
    }
    render() {

        return this._showLogin(this.props);
    }
}
function mapStateToProps(state){
        return{
            username:state.security.login.username,
            password:state.security.login.password,
            accesstoken:state.security.login.accesstoken,
        }
    }
    
function mapDispatchToProps(dispatch){
        return{
            actions:{
                login: bindActionCreators(actionLogin, dispatch),
            }
        }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)