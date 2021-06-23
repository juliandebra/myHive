import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions, Modal } from 'react-native';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import WrongModal from './WrongModal';
import RegisterForm from './RegisterForm';

const close = <Ionicons name='close-circle' size={32} color='#ff6100'/> //Icono para cerrar ventana

//Modal de Login. 
//Comprende de dos TextInput, el cual si escribis los parametros del objeto admin, va a verificar y loguear a la App.

export default ({closeModal}, {registerModal}) =>{
    //State para poder guardar los datos ingresados y compararlos con los datos correctos para loguear.
    const [account, setAccount] = useState({
        userName: '',
        password: '',
    })
    const admin = {
        admuser: 'admin',
        admpassword: '1234',
    }
    const [wrongModal, setWrongModal] = useState(false); //Modal que advierte que los datos ingresados son incorrectos.
    const navigation = useNavigation(); //Utilizo el useNavigation para poder redireccionar a Home.
    const [register, setRegister] = useState(false); //Modal que se activa si clickeas Sign up!
    //Funciones para abrir y cerrar el modal
    function registerModal(){
        setRegister(true)
      }
    function closeRegModal(){
        setRegister(false)
    }
    //Funcion para verificar los datos ingresados una vez que clickeas 'Login'.
    function validateLogin(){
        if (account.userName === admin.admuser && account.password === admin.admpassword){
            closeModal();
            navigation.navigate('Home');
        } else {
            setWrongModal(true); //En caso de ser incorrecto, abrirá un nuevo Modal.
        }
    }
    
    function closeWrongModal(){
        setWrongModal(false)
    }

    return(
        <View  style={styles.container}>
            <View style={styles.modal} >

            <TouchableOpacity  onPress={closeModal}><Text style={styles.closeButton}>{close}</Text></TouchableOpacity>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.boxInput} placeholder='Username' placeholderTextColor='#ff914d'
                onChangeText={(c) => setAccount({...account, userName: c })} />
                
                <TextInput style={styles.boxInput} secureTextEntry={true} placeholder='Password' placeholderTextColor='#ff914d'
                onChangeText={(c) => setAccount({...account, password: c })}/>
                
                <TouchableOpacity title='Logged' style={styles.button} 
                onPress={() => validateLogin()}
                >
                    <Text style={styles.buttonText} >Login</Text>
                </TouchableOpacity>

                <Text style={styles.text}>Still don't have an account? 
                    <TouchableOpacity onPress={registerModal}>
                        <Text style={styles.textLink}> Sign up!</Text>
                    </TouchableOpacity>
                </Text>
                <Modal transparent={true} animationType='slide' visible={wrongModal}> 
                    <WrongModal wrongModal={closeWrongModal}/>
                </Modal>
                <Modal transparent={true} animationType='slide' visible={register}> 
                    <RegisterForm closeModal={closeRegModal} /> 
                </Modal>
            </View>
        </View>
        
    )
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
        
         width: WIDTH -40,
        height: 300,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        borderWidth: 3,
        borderColor: '#ff6100',
        borderRadius: 20,
        
    },
    closeButton:{
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        marginLeft: WIDTH-100,
        position: 'relative'
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
        marginTop: 5,
        color: '#ff6100',
        flexDirection: 'row'
    },
    textLink:{
        color: '#ff6100',
    }
})