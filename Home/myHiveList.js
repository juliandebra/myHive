import React from 'react';
import {  View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import Counter from './counter.jsx';

//Componente que mapea cada elemento del state de myHiveShop

export default function MyHiveList(props) {
    return(
        <View style={styles.container} >
            <ScrollView>
                {props.counters.map((counter) => {
                return (
                    <Counter key={counter.id} onIncrement={props.onIncrement} counter={counter}/>
                )
                })}
          </ScrollView>
          </View>
    )
}

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },  
 
})