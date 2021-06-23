import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Modal, Dimensions} from 'react-native';
import MyHiveList from './myHiveList.js';  
import { Ionicons } from '@expo/vector-icons';
import BuyModal from './BuyModal.js';

const tools = <Ionicons name='cart-outline' size={32} color='#ff6100'/>

//Lista de compras. Dentro del componente se comprende el boton de Resetear, la cantidad de productos seleccionados y el botón para realizar la compra.
//Para esta lista utilicé el mismo metodo que el ejercicio del carrito, ya que me pareció mejor la forma de renderización que el uso de Flatlist.

export default function MyHiveShop() {
  const [buyModal, setBuyModal] = useState(false)  
  const [myShopList, setMyShopList] = useState({
      counters : [
            { id: 0, value: 0, name: 'Daisy', price: 40     },
            { id: 1, value: 0, name:'Rose', price: 70       },
            { id: 2, value: 0, name: 'Iris', price: 50      },
            { id: 3, value: 0, name: 'Narcissus', price: 50 },
            { id: 4, value: 0, name: 'Orchid', price: 70    },
            { id: 5, value: 0, name: 'Tulip', price: 80     },
            { id: 6, value: 0, name: 'Sunflower', price: 100},
            { id: 7, value: 0, name: 'Cyclamen',price: 40   },
            { id: 8, value: 0, name: 'Carnation',  price: 50},
            { id: 9, value: 0, name: 'Poppy', price: 30     },
            { id: 10, value: 0, name: 'Pansy', price: 40    },
            { id: 11, value: 0, name: 'Violet', price: 50   },
            { id: 12, value: 0, name: 'Mimosa', price: 40   },
            { id: 13, value: 0, name: 'Daffodil', price: 60 },
            { id: 14, value: 0, name: 'Lily', price: 80     },
      ]}
      );
  //Clona el state para así incrementar el value de algún objeto.
  const handleIncrement = (counter) => {
    const counters = [...myShopList.counters];
    const index = counters.indexOf(counter);
    counters[index]={...counter}; 
    counters[index].value++;
    setMyShopList({counters})
  };
  //Función para resetear los elementos a 0
  const handleReset = () => {
    const counters = myShopList.counters.map((c) => {
      c.value = 0;
      return c;
    });
    setMyShopList({counters});
  };
  //Función para devolver el total de dinero a abonar.
  const result = () => {       
    const result =  myShopList.counters.filter(c => c.value>0).reduce((t,c ) => t + c.price * c.value, 0);
    return result;
  }
  //Función que devuelve el total de elementos comprados
  const totalCounters = () =>{
    const totalCounters = myShopList.counters.filter(c=> c.value>0).length;
    return totalCounters;
  }
  //Funcion para abrir y cerrar el Modal de compra
  const openBuyModal= () =>{
    setBuyModal(true)
  }
  const closeBuyModal= () =>{
    setBuyModal(false)
  }
  //Función donde aparece el modal de compra realizada y resetear los valores en caso de que se haya seleccionado alguno.
  const buyButton = () => {
    if(totalCounters() > 0){
    openBuyModal();
    handleReset(); 
     }
  }

  return (
      <View style={styles.container}>
        <Text style={styles.subtitle}>myHive Chart</Text>  
        <View style={styles.results}>
        <TouchableOpacity onPress={handleReset}><Text style={styles.buy}>Reset ${result()} </Text></TouchableOpacity>  
        <TouchableOpacity onPress={buyButton}><Text style={styles.buy}>Buy Now! </Text></TouchableOpacity>  
        <Text style={styles.icon}>{tools}</Text><Text style={styles.counter}>{totalCounters()}</Text>    
        </View>
        <View style={styles.columns}>
          <Text style={styles.text}>Product</Text>
          <Text style={styles.text}>Price</Text>
          <Text style={styles.text}>Items</Text>
        </View>
      <MyHiveList 
      counters={myShopList.counters} 
      onIncrement={handleIncrement}
      /> 
       <Modal transparent={true} animationType='slide' visible={buyModal}> 
          <BuyModal closeBuyModal={closeBuyModal} style={styles.modal}/> 
        </Modal>
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
  subtitle:{
    flexDirection: 'row',
    fontWeight: "bold", 
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    textAlign: 'center',
    color: '#ff6100',
    marginTop: 20,
  },
  results:{
    flexDirection: 'row',
    marginVertical: 20,
    marginLeft: 30,
  },
  columns:{
    flexDirection:'row'
  },
  text:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    textAlign: 'center',
    color: '#ff6100',
    marginLeft: 45,
  },
  logo: {
    flexGrow: 20,
    alignItems: 'center',
    justifyContent: 'center',
    },
  buy:{
    height: 40,
    width: 120,
    marginRight: 20,
    backgroundColor: '#ff6100',
    borderRadius: 20,
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    paddingTop: 5,
    flexDirection: 'row',
  },
  counter:{
    width: 25,
    height: 25,
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#ff6100',
    borderRadius: 20,
    textAlign: 'center',
    flexDirection: 'row',
    marginLeft: -5
  },
  modal:{
    borderWidth: 3, 
    borderRadius: 20,
    borderColor: '#ff6100',
    width: WIDTH -60,
    height: 150,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
},
  
});

