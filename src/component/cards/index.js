import React from 'react';
import { View } from 'react-native';
import styles from './style';

const Card = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
};


export { Card };