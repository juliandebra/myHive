import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, CheckBox, Dimensions, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const close = <Ionicons name='close-circle' size={32} color='#ff6100'/>

//Modal que aparece una vez que compraste dentro de myShop

export default ({closeBuyModal}) =>{
    return(
        <View style={styles.container}>
            <View style= {styles.modal}>
            <TouchableOpacity onPress={closeBuyModal}><Text style={styles.closeButton}>{close}</Text></TouchableOpacity>
            <Text style={styles.text}> 
            Hurrayyy!! You've just bought in myHive. You will be receiving your stock in a few days! 
            </Text>
            </View> 
        </View>
    );
}

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        margin: 'auto',
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center'
    },
    modal:{
        borderWidth: 3, 
        borderRadius: 20,
        borderColor: '#ff6100',
        width: WIDTH -60,
        height: 150,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        
    },
    closeButton:{
        marginLeft: WIDTH-120,
        marginTop: -20,
    },
    text:{
        color: '#ff6100',
        flexDirection: 'row',
        textAlign: 'center'
    },
})