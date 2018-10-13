import React, { Component } from 'react';
import { Modal,View } from 'react-native';


const FormModal=({children,visible})=>{
    return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={visible || false}
            onRequestClose={()=>{
                console.log('modal has been closed');
            }}
        >
            <View style={{marginTop:22,flex:1}}>
                {children} 
            </View>   
        </Modal>
    );
}

export { FormModal };