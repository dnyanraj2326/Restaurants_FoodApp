import { View, Text, TouchableOpacity,Image, StatusBar, ScrollView } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CartData from '../Screens/CartData';
const CartCard = () => {
  return (
    <View style={{flex:1}}>
      {
              CartData.map((cartProduct, index) => {
                return (
                    <View key={index} style={{
                      flexDirection: 'row', alignItems:'center',
                      backgroundColor: '#fff', paddingVertical: 10,
                      paddingLeft: 10,borderRadius:30,position:'relative',marginBottom:20,
                    }}>
                      <Image source={{ uri: cartProduct.image}}
                        style={{ width: 80, height: 80, borderRadius: 25,}} />
                      <View style={{flex:1,paddingLeft:20,}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between',paddingBottom:10,alignItems:'center'}}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#000' }}>{cartProduct.foodName}</Text>
                            <TouchableOpacity style={{
                              position: 'absolute', right: 0,
                              top: -16, paddingLeft: 14, paddingBottom: 8, paddingRight: 7,paddingTop:5, backgroundColor: '#000',
                              borderBottomLeftRadius:50,borderTopRightRadius:30
                              }}>
                              <MaterialCommunityIcons name={'delete-forever'} size={22} color={"#fff"}  />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems:'center',paddingBottom:10,}}>
                          <View style={{flexDirection: 'row',alignItems:'center',backgroundColor:'#D6E5FA',borderRadius:50}}>
                            <TouchableOpacity style={{paddingRight:8}}>
                              <AntDesign name={'minuscircleo'} size={27} color={"#000"}  />
                            </TouchableOpacity>
                            <Text style={{fontWeight:'bold',color:'#000'}}>{cartProduct.quantity}</Text>
                            <TouchableOpacity style={{paddingLeft:8}}>
                              <AntDesign name={'pluscircleo'} size={27} color={"#000"}  />
                            </TouchableOpacity>
                          </View>
                          <Text style={{paddingRight:30,fontSize:15,fontWeight:'bold',color:'#000'}}>${cartProduct.price}.00</Text>
                        </View>
                      </View>
                    </View>
                )
              })
            }
    </View>
  );
};

export default CartCard;
