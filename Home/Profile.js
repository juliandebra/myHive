import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

//Screen de Profil. Bien Sensillo a modo de decoración por el momento.

export default function Profile({navigation}) {
  
  return (
      <View style={styles.container}>
        <Text style={styles.title}>myProfile</Text>
        <View style={styles.profile}>
          <Image source={require('../../apptest/assets/profilepic.png')} style={styles.image}/>
          
          <View style={styles.textBlock}>
            <Text style={styles.text}>Username: </Text>
            <Text style={styles.text2}>Admin</Text>

            <Text style={styles.text}>Email: </Text>
            <Text style={styles.text2}>julian.debra25@gmail.com </Text>

            <Text style={styles.text}>Age:</Text>
            <Text style={styles.text2}>28</Text>

            <Text style={styles.text}>Location: </Text>
            <Text style={styles.text2}>Rosario</Text>

            <Text style={styles.text}>Favorite Flower: </Text>
            <Text style={styles.text2}>Cactus</Text>     
          </View>
        </View>
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
  profile:{
    flex: 1,
    flexDirection:'row'
  },
  title:{
    flexDirection: 'column',
    fontWeight: "bold", 
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    textAlign: 'left' ,
    color: '#ff6100',
    marginTop: 30,
    marginLeft: 30,
  },
  textBlock:{
    marginTop: 20,
  },
  text:{
    width: WIDTH-50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    textAlign: 'left',
    color: '#ff6100',
    marginHorizontal: WIDTH/20,
  },
  text2:{
    width: WIDTH-50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    textAlign: 'left',
    color: '#ff6100',
    marginHorizontal: WIDTH/20,
    marginBottom: 10,
  },
    image:{
      width: 150,
      height: 150,
      borderWidth: 3,
      borderColor: '#ff6100',
      borderRadius: 10,
      marginLeft: 30,
      marginTop: 20,
    },
  
});

