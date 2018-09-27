import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './style';

const Textbox = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>
                {label}
            </Text>
            <TextInput style={styles.labelStyle} secureTextEntry={secureTextEntry}
                style={styles.inputStyle}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}/>
        </View>
    );
};

export { Textbox };