import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './style';

const Button=({ onPress, children})=>{
    
    return(
        <TouchableOpacity  onPress={ onPress } style={styles.buttonStyle}>
            <Text style={styles.textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

export { Button };