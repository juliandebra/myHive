import React, {useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const tools = <Ionicons name='business-outline' size={32} color='#ff6100'/>

//Screen de Home. Coomprende un loading con un gif.
//Muestra simplemente que está en construcción para un futuro refactory y el logo.

export default function Home({navigation}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { //Va a tener 5 segundos para cargar 
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  if (isLoading) {
   return( 
    <View style={styles.container1}>
      <View style={styles.loading}>
        <Image animationtype='fade' source={require('../../apptest/assets/loading.gif')} size= "large" color='#ff6100'/>
      </View>
   </View>
   )
  }

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to myHive!</Text>
        <Text style={styles.subtitle}>{tools}Tab under construction{tools}</Text>
        <Text style={styles.text}>Coming soon, we will have a Marketplace Feed so you can publish your products and buy stuff to people you follow!</Text>
        <TouchableOpacity style={styles.button} title='Go to myShop' onPress={() => navigation.navigate('myHive Shop')} >
            <Text style={styles.textButton} > Go to myShop </Text>
        </TouchableOpacity>
        <Image source={require('../../apptest/assets/logo_transparent2.png')} style={styles.logo}/>
      </View>
  );
}

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  container1: {
    flex: 1,
    backgroundColor: '#FFC891',
    flexDirection: 'column',
  },
  title:{
    flexDirection: 'column',
    fontWeight: "bold", 
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    textAlign: 'center',
    color: '#ff6100',
    marginVertical: 30,
  },
  subtitle:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    textAlign: 'center',
    color: '#ff6100',
    marginBottom: 30,
  },
  text:{
    width: WIDTH-50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    textAlign: 'center',
    color: '#ff6100',
    marginHorizontal: WIDTH/20,
  },
  button:{
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6100',
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal: WIDTH/4,
  },  
  textButton:{
    width: 200,
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  logo: {
    marginHorizontal:WIDTH/22,
    flexDirection: 'column',
    width: WIDTH -50,
    height: WIDTH -50,
    alignItems: 'center',
    justifyContent: 'center',
    },
    loading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    }
    
  
});

