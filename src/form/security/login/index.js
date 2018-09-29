import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Textbox, Button } from '../../../component/common';
import { Container, Content,Card,CardSection } from '../../../component';
import styles from './style';

export default class Login extends Component {
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
                                <Textbox label='USERNAME' placeholder='USERNAME@email.com' secureTextEntry={false} />
                            </View>
                        </CardSection>
                        <CardSection>
                            <View style={styles.textbox}>
                                <Textbox label='PASSWORD' placeholder='PASSWORD' secureTextEntry={true} />
                            </View>
                        </CardSection>
                        <CardSection>
                            <View style={styles.textbox}>
                                <Button>
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
