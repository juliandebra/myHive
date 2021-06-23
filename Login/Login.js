import React from 'react';
import { StyleSheet, View, Image, ImageBackground, Dimensions } from 'react-native';
import Button1 from './Button1';
import Button2 from './Button2';

//Screen de Login, va a aparecer luego de que cargue el loading. Comprende de dos botones Componentes
//Pasa el parametro de navigation al boton de Login

export default function Login({navigation}) {
  return (
    <ImageBackground source={require ('../../apptest/assets/Fondo.png')} style={styles.container}>
      <View>
        <View style={styles.firstHalf}>
        <Image source={require('../../apptest/assets/logo_transparent.png')} style={styles.logo}/>    
        </View>
        <View style={styles.text}>
        <Button1 onPress={() => navigation.push('Home')} animationType='slide' />
        <Button2 animationType='slide' />     
        </View> 
      </View>
    </ImageBackground>
    
  );
}

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstHalf:{
    marginHorizontal: WIDTH,
    flex:1,
    marginTop: -5,
  },
  logo: {
    width: WIDTH -200,
    height: WIDTH -200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    flex:2.3,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
