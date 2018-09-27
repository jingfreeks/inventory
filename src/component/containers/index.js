import React from 'react';
import { View } from 'react-native';
import styles from './style';

const Container = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
};

export { Container };