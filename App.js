import React, {useState, useEffect} from 'react';
import { StyleSheet, Dimensions, View, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import DrawNav from './DrawNav';

//App con un loading de una imagen y donde se carga toda la app y se encuentra inserto la navegación drawer

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  //Espera unos 3 segundos y lleva al login
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
   return( 
    <View style={styles.loading}>
        <Image source={require('../apptest/assets/logo_transparent2.png')} style={styles.loading}/>  
    </View>
   )
  }
  return (
    <NavigationContainer >
      <DrawNav/>
    </NavigationContainer>
  );
}

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navBar:{
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#ff6100'
  },
  loading: {
    width: 200,
    height: 200,
    margin: WIDTH/8,
  }
});

