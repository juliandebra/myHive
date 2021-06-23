import React, {useState} from 'react';
import { StyleSheet,TouchableOpacity, Text, View, Modal } from 'react-native';
import RegisterForm from './RegisterForm'

//Componente del boton Register. Dentro de este Componente, se comprende el Modal del Register

export default (registerModal) => {
        //State y funciones que manejan si el modal está abierto o no.
    const [register, setRegister] = useState(false);
    
    function registerModal(bool){
        setRegister(true)
    }
      function closeModal(bool){
        setRegister(false)
    }
    return(
    <TouchableOpacity onPress={registerModal}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
        </View>
        <Modal transparent={true} animationType='slide' visible={register}> 
            <RegisterForm closeModal={closeModal} /> 
        </Modal>
    </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    button:{
        width: 200,
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