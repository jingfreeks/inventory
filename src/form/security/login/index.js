import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Textbox, Button } from '../../../component/common';
import { Container, Content,Card } from '../../../component';
import styles from './style';

export default class Login extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <View style={styles.container}>
                        <View style={styles.textbox}>
                            <Textbox label='USERNAME' placeholder='USERNAME@email.com' secureTextEntry={false} />
                        </View>
                        <View style={styles.textbox}>
                            <Textbox label='USERNAME' placeholder='USERNAME@email.com' secureTextEntry={false} />
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}
