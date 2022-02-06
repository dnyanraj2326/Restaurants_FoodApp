import { View, Text, TouchableOpacity,Image, StatusBar, ScrollView } from 'react-native';
import React from 'react';
import CartCard from '../Components/CartCard';


const Cart = () => {
  return (
    <View style={{ flex: 1, marginTop: 28,  backgroundColor: '#D6E5FA', paddingTop: 20,height:'100%' }}>
      <View style={{ paddingHorizontal: 20,}}>
        <StatusBar backgroundColor="#D6E5FA" barStyle="dark-content" />
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#000', paddingBottom: 28 }}>My Cart</Text>
          <ScrollView showsVerticalScrollIndicator={false} style={{height:'60%'}}>
            <CartCard />
          </ScrollView>
      </View>
      <View style={{backgroundColor:'#fff',flex:1,borderTopRightRadius:50,borderTopLeftRadius:50}}>
        <View style={{paddingHorizontal:35,paddingTop:15}}>
        <Text style={{fontSize:17,fontWeight:'bold',color:'#000'}}>3 Items in cart</Text>
        <View>
            <View style={{
              flexDirection: 'row', justifyContent: 'space-between',
              paddingTop: 10,paddingBottom:10, borderBottomColor: '#eee',
              borderBottomWidth: 1,}}>
            <Text style={{fontSize:15,fontWeight:'bold',color:'#000'}}>Sub Total</Text>
            <Text style={{color:'#000',}}>$ 390.00</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:10,paddingBottom:10, borderBottomColor: '#eee',
              borderBottomWidth: 1,}}>
            <Text style={{fontSize:15,fontWeight:'bold',color:'#000'}}>Shiping</Text>
            <Text style={{color:'#000',}}>$ 20.00</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:10,paddingBottom:10,}}>
            <Text style={{fontSize:15,fontWeight:'bold',color:'#000'}}>Total</Text>
            <Text style={{color:'#000',fontWeight:'bold'}}>$ 370.00</Text>
          </View>
        </View>
        <TouchableOpacity style={{paddingHorizontal:30,paddingVertical:15,
                                 backgroundColor:'#2C3333',borderRadius:40,
                                 marginTop:20}}>
          <Text style={{fontSize:15,fontWeight:'bold',color:'#fff',textAlign:'center'}}>Order Now</Text>
        </TouchableOpacity>
        </View>
    </View>
    </View>
    
  );
};

export default Cart;
