import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, CheckBox, Dimensions, Modal } from 'react-native';
import Terms from './Terms';
import RegisterModal from './RegisterModal';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const close = <Ionicons name='close-circle' size={32} color='#ff6100'/> //Icono para cerrar ventana

//Modal de Register con cinco TextInput.
//Verificará si los datos son validos para crear una cuenta y si es así, redireccionará al Home.

export default ({closeModal}) =>{
    const [isEnabled, setIsEnabled] = useState(false); //State del CheckBox.
    const [termsModal, setTermsModal] = useState(false); //State para abrir Modal de terminos y condiciones.
    const [registerModal, setRegisterModal] = useState(false); //State para abrir el Modal en caso de que algún dato ingresado sea erroneo
    const [account, setAccount] = useState({ //Objeto usado para guardar los datos ingresados una vez que se registra
        userName: '',
        email: '',
        password: ''
    })
    const [emailConfirm, setEmailConfirm] = useState(''); //State para guardar los datos ingresados en Email Confirm
    const [passConfirm, setPassConfirm] = useState(''); //State para guardar los datos ingresados en Password Confirm
    const navigation = useNavigation(); //Utilizo el useNavigation para poder redireccionar a Home.

    function openTermsModal(bool){ //Función para abrir o cerrar Modal de términos y condiciones.
        setTermsModal(true)
    }
    function closeTermsModal(bool){
        setTermsModal(false)
    }
    
    function openRegisterModal(bool){ //Función para abrir o cerrar Modal, en caso de que los datos ingresados no sean válidos.
        setRegisterModal(true)
    }
    function closeRegisterModal(bool){
        setRegisterModal(false)
    }
    
    //Función para validar si el email es correcto o si escribió un dato erróneo 
    const emailValidate = () => { 
       const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/; 
       const aux = null;
       const validMail = regex.test(account.email);
        if (validMail){
            return true;
        } else{
            return false;
        }
    }
    //Función para guardar los datos ingresados mediante AsyncStorage.
    //Ésta función está comentada debido a que no logra recuperar bien los datos guardados. 
    //Se logran guardar pero no se pueden devolver como para lograr crear una cuenta nueva.
    //De todas formas, dejo escrita la función para un futuro refactory y dentro de ella, solo realiza la función de verificar.
    const createAccount =  async () => {
        // const saveAcc = await AsyncStorage.getItem('newAccount');
        // const createAcc = JSON.parse(saveAcc);
        // if (!createAcc){
        //     createAcc = []
        //     createAcc.push(newAccount)
        //     await AsyncStorage.setItem('newAccount', JSON.stringify(createAcc) )
        //     .then( ()=>{
        //     console.log('Account created')
        //     } )
        //     .catch( ()=>{
        //     // console.log('There was an error creating the account')
        //     } )
        // }
        verifyInfo();
    } 
    //Función para verificar que los datos ingresados son correctos
    // 8 caracteres mínimo para el username. Que el email sea correcto y que el email y pass confirm coincidan entre sí.
    function verifyInfo(){
        emailValidate(); 
        if (emailValidate()){ //Anidé los if, ya que si colocaba esta función dentro del if no funcionaba del todo bien
        if ((account.userName).length >= 8 && account.password === passConfirm && account.email === emailConfirm ){
            navigation.navigate('Home');
            closeModal();
        } else {
            openRegisterModal(true) //En caso de que cualquiera de los dos if no devuelva true. Abre el Modal de advertencia.
        }} else {
            openRegisterModal(true)
        }
    }

    return(
        <View  style={styles.container}>
            <View style={styles.modal} >

                <TouchableOpacity  onPress={closeModal}><Text style={styles.closeButton}>{close}</Text></TouchableOpacity>
                <Text style={styles.title}>Register</Text>
                
                <TextInput style={styles.boxInput} placeholder='Your Name' placeholderTextColor='#ff914d'
                onChangeText={(c) => setAccount({...account, userName: c })}/>
              
                <TextInput style={styles.boxInput} placeholder='Email' placeholderTextColor='#ff914d' 
                onChangeText={(c) => setAccount({...account, email: c })}/>
               
                <TextInput style={styles.boxInput} placeholder='Confirm Email' placeholderTextColor='#ff914d'
                onChangeText={(c) => setEmailConfirm(c)}/>
                
                <TextInput style={styles.boxInput} secureTextEntry={true} placeholder='Password' placeholderTextColor='#ff914d'
                onChangeText={(c) => setAccount({...account, password: c })}/>
             
                <TextInput style={styles.boxInput} secureTextEntry={true} placeholder='Confirm Password' placeholderTextColor='#ff914d'
                onChangeText={(c) => setPassConfirm(c)}/>
                
                <TouchableOpacity  
                    onPress={() => {createAccount()}}
                    style={[styles.button, {backgroundColor: isEnabled ? '#ff6100' : '#ff914d'}]} 
                    disabled={!isEnabled} transparent='false' >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>

                <View style={{flexDirection: 'row'}}>
                    <CheckBox value={isEnabled} onValueChange={setIsEnabled} style={styles.checkBox} />
                    <TouchableOpacity onPress={openTermsModal}>
                        <Text style={styles.text}>I agree to the terms and conditions</Text>
                    </TouchableOpacity>
                    <Modal transparent={true} animationType='slide' visible={termsModal}> 
                        <Terms closeTermsModal={closeTermsModal}/>
                    </Modal>
                    <Modal transparent={true} animationType='slide' visible={registerModal}> 
                        <RegisterModal closeRegisterModal={closeRegisterModal}/>
                    </Modal>
                </View>
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
        height: 500,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        borderWidth: 3,
        borderColor: '#ff6100',
        borderRadius: 20,
        
    },
    title:{
        color: '#ff6100',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20
    },
    closeButton:{
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        marginLeft: WIDTH-100,
        position: 'relative'
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
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    buttonText:{
        color: '#fff',
        fontWeight: '400',
      
    },
    text:{
        color: '#ff6100',
        marginTop: 20,
    },
   checkBox:{
       marginTop: 15,

   }
})

