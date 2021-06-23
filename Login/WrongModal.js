import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, CheckBox, Dimensions, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const close = <Ionicons name='close-circle' size={32} color='#ff6100'/>

//Modal que se abre cuando ingresas datos invalidos para loguear.

export default ({wrongModal}) =>{
    return(
        <View style={styles.container}>
            <View style= {styles.modal}>
            <TouchableOpacity onPress={wrongModal}><Text style={styles.closeButton}>{close}</Text></TouchableOpacity>
            <Text style={styles.text}> 
            Invalid Username or Password. Please, check if you typed correctly and try again.
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
    title:{
        color: '#ff6100',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20
    },
    boxInput:{
        borderWidth: 1,
        borderColor: '#ff6100',
        height: 40,
        width: WIDTH -70,
        borderRadius: 20,
        backgroundColor: '#fff',
        textAlign: 'center',
        marginBottom: 20,
    },
    button:{
        width: 80,
        height: 40,
        color: '#000',
        backgroundColor: '#ff6100',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        color: '#fff',
        fontWeight: '400'
    },
    text:{
        color: '#ff6100',
        flexDirection: 'row',
        textAlign: 'center'
    },
    textLink:{
        color: '#ff6100',
    }
})