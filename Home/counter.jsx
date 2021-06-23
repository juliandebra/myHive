
import React from 'react';
import { TouchableOpacity, Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';

//Componente que carga los elementos del estado dentro de myHiveShop.
//Nombre, precio, cantidad seleccionada y un botón para incrementar la cantidad deseada.

export default function Counter(props) {
    return(
        <View style={styles.container} >
            <ScrollView>
                    <View style={styles.product} > 
                    <Text style={styles.name}>{props.counter.name}</Text>
                    <Text style={styles.price}>${props.counter.price}</Text>
                    <Text style={styles.value}>{props.counter.value}</Text>
                    <TouchableOpacity onPress= { () => props.onIncrement(props.counter) }><Text style={styles.buy}>Buy</Text></TouchableOpacity>
                     </View> 
          </ScrollView>
          </View>
    )
}

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },  
    product:{
        flexDirection:'row',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#ff6100'
    },
    name:{
        height: 40,
        width: 120,
        marginRight: 10,
        backgroundColor: '#FF7500',
        borderRadius: 20,
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        paddingTop: 5,
    },
    price:{
        height: 40,
        width: 80,
        marginRight: 30,
        backgroundColor: '#FF8F1C',
        borderRadius: 20,
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        paddingTop: 5,
    },
    value:{
        height: 40,
        width: 40,
        marginRight: 20,
        backgroundColor: '#FF8F1C',
        borderRadius: 20,
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        paddingTop: 5,
    },
    buy:{
        height: 40,
        width: 60,
        marginRight: 20,
        backgroundColor: '#ff6100',
        borderRadius: 20,
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        paddingTop: 5,
    }
})