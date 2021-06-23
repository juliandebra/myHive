import React from 'react';
import { StyleSheet, Dimensions, View, Image } from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import MainStackNav, {MyShopCateg,ProfileNav, AboutUsNav,MyShopNav} from './MainStackNav';
import { Ionicons } from '@expo/vector-icons';

const DrawerNav = createDrawerNavigator();
const WIDTH = Dimensions.get('window').width;

//Utilizo esta función para pasarle las propiedades al drawer. Por el momento solo está pasando una imagen de header
function ImageLogo(props){
    return (
        <View>
            <Image source={require('./assets/logo_transparent.png')} style={styles.logo}></Image>
            <DrawerItemList {...props}/>
            </View>
    )
}

export default function DrawNav() {
  return (
        //Agrego estilo propio al drawer. Luego coloco la redirección de cada opción que aparece. 
      <DrawerNav.Navigator    
        drawerStyle={{
        backgroundColor: '#FF914d',
        color: 'white',
        width: 210,
        
      }} drawerContentOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#fff'
      }}
        drawerContent={(props)=><ImageLogo {...props}/>}>
        
        <DrawerNav.Screen options={{ drawerIcon: () => (<Ionicons name='home' size={20} color='#fff'/>)}} name='Home' component={MainStackNav} />
        <DrawerNav.Screen options={{ drawerIcon: () => (<Ionicons name='person-circle-outline' size={20} color='#fff'/>)}} name='Profile' component={ProfileNav}/>
        {/* <DrawerNav.Screen options={{ drawerIcon: () => (<Ionicons name='cart' size={20} color='#fff'/>)}} name='myHive Categ' component={MyShopCateg}/> */}
        <DrawerNav.Screen options={{ drawerIcon: () => (<Ionicons name='cart' size={20} color='#fff'/>)}} name='myHive Shop' component={MyShopNav}/>
        <DrawerNav.Screen options={{ drawerIcon: () => (<Ionicons name='help-circle' size={20} color='#fff'/>)}} name='About us' component={AboutUsNav}/>
      </DrawerNav.Navigator>
  );
}

const styles = StyleSheet.create({

  logo:{
    width: 100,
    height: 100,
    marginLeft: 50,
} 
});

