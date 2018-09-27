import React from 'react';
import { View } from 'react-native';
import styles from './style';

const Content = (props) => {
    return (
        <View style={styles.content}>
            {props.children}
        </View>
    );
};

export { Content };