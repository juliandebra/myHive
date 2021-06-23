import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
  //Traigo todas las screens.
import Login from './Login/Login';
import Home from './Home/Home';
import Profile from './Home/Profile';
import AboutUs from './Home/AboutUs';
import MyHiveShop from './Home/myHiveShop';
// import MyHiveCateg from './Home/myHiveCateg';
// import MyHiveShop2 from './Home/myHiveShop2';
// import MyHiveShop3 from './Home/myHiveShop3';

const StackNav = createStackNavigator();
const WIDTH = Dimensions.get('window').width;

//En MainStack coloco en funciones diferentes cada Componente al cual se va a dirigir. 
//Menos el primero el cual comprende del Login, ya que va a ser la primera pantalla que vemos

export default function MainStackNav() {
  return (
    <StackNav.Navigator >
      <StackNav.Screen  options={{headerShown: false}} name='Login' component={Login}/>
      <StackNav.Screen  options={{headerStyle: {backgroundColor: '#ff6100'}, headerTintColor: 'white', headerTitleStyle: {
      fontWeight: 'bold', marginHorizontal: WIDTH/4}}} name='Home' component={Home} />   
    </StackNav.Navigator>
  );
}

export function ProfileNav(){
  return(
  <StackNav.Navigator >
    <StackNav.Screen options={{headerStyle: {backgroundColor: '#ff6100'}, headerTintColor: 'white'}} 
    name='Profile' component={Profile}/>
  </StackNav.Navigator>
  )
}

export function MyShopNav(){
  return(
  <StackNav.Navigator >
    <StackNav.Screen options={{headerStyle: {backgroundColor: '#ff6100'}, headerTintColor: 'white'}} 
    name='myHive Shop' component={MyHiveShop}/>
  </StackNav.Navigator>
  )
}


export function AboutUsNav(){
  return(
  <StackNav.Navigator >
    <StackNav.Screen options={{headerStyle: {backgroundColor: '#ff6100'}, headerTintColor: 'white'}} 
    name='About Us' component={AboutUs}/>
  </StackNav.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar:{
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#ff6100'
  }
});

// export function MyShopCateg(){
//   return(
//   <StackNav.Navigator >
//     <StackNav.Screen options={{headerStyle: {backgroundColor: '#ff6100'}, headerTintColor: 'white'}} 
//     name='myHive Categ' component={MyHiveCateg}/>
//   </StackNav.Navigator>
//   )
// }


// export function MyShopNav2(){
//   return(
//   <StackNav.Navigator >
//     <StackNav.Screen options={{headerStyle: {backgroundColor: '#ff6100'}, headerTintColor: 'white'}} 
//     name='myHive Shop2' component={MyHiveShop2}/>
//   </StackNav.Navigator>
//   )
// }

// export function MyShopNav3(){
//   return(
//   <StackNav.Navigator >
//     <StackNav.Screen options={{headerStyle: {backgroundColor: '#ff6100'}, headerTintColor: 'white'}} 
//     name='myHive Shop3' component={MyHiveShop3}/>
//   </StackNav.Navigator>
//   )
// }