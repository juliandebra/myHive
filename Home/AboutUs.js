import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';

//Screen de About Us. Comprende de una simple descripción del objetivo de la App y una imagen.

export default function AboutUs() {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.text}>We build the tecnology that helps you to find the best place to buy plants, seeds and all the tools you need so you can give life to your spaces</Text>
        <Text style={styles.text}>This network is about buying and selling botanical elements to the nearest shop, to your favorite shop, even to your friends or whoever has this app! </Text>
        <Image style={styles.image}source={require('../../apptest/assets/plants.jpg')}/>
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
    marginVertical: 10,
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
  image:{
    width:300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginHorizontal: WIDTH -360,
    borderWidth:5,
    borderColor: '#ff6100'
  }
});

