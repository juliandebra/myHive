import React, {useState} from 'react';
import { StyleSheet,TouchableOpacity, Text, View, Modal } from 'react-native';
import LoginForm from './LoginForm';

//Componente del boton Login. Dentro de este Componente, se comprende el Modal del Login

export default ({onPress}) => {
        //State y funciones que manejan si el modal está abierto o no.
    const [login, setLogin] = useState(false);

    function loginModal(bool){
        setLogin(true)
    }
    function closeModal(bool){
        setLogin(false)
    }
    return(
    <TouchableOpacity onPress={loginModal} >
        <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
        </View>

        <Modal transparent={true} animationType='slide' visible={login}> 
            <LoginForm closeModal={closeModal} style={styles.modal}/> 
        </Modal>
    </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    button:{
        width: 200,
        marginBottom: 20,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
    },
    buttonText:{
        margin: 10,
        color: '#ff6100',
        fontWeight: 'bold',
        textAlign:'center',
        alignItems: 'center'
    },
    modal: {
        borderRadius: 20,
      }
})