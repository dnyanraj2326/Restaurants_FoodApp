import { View, Text, TouchableOpacity, Modal, Alert } from 'react-native';
import React, { useState } from 'react';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';



const Payment = () => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
      <View>
        <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Payment has been closed.");
                setModalVisible(!modalVisible);
                }}
        >
            <View style={{flex:1,
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 140,
              }}>
                  <View style={{
                    margin: 0,
                    backgroundColor: "#F7F7F7",
                    borderRadius: 20,
                    paddingHorizontal: 0,
                    paddingVertical:15,
                    width: '100%',
                    height:'60%',
                    alignItems: "center",
                   }}>
                      <View style={{ marginTop: 10, width:'90%'}}>
                    <View style={{
                        flexDirection: 'row', backgroundColor: '#fff',
                        paddingHorizontal: 20, paddingVertical: 10,
                        borderRadius: 10,alignItems:'center'
                    }}>
                        <View style={{paddingRight:15}}>
                            <Foundation name={'dollar'} size={27} color={"orange"}  />
                        </View>
                        <View>
                            <Text style={{color:'gray',fontSize:15,fontWeight:'bold'}}>Cash</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row', backgroundColor: '#fff',
                        paddingHorizontal: 20, paddingVertical: 10,
                        borderRadius: 10, marginTop: 15,alignItems:'center'
                    }}>
                        <View style={{paddingRight:15}}>
                            <Ionicons name={'wallet'} size={27} color={"orange"}  />
                        </View>
                        <View>
                            <Text style={{color:'gray',fontSize:15,fontWeight:'bold'}}>Digital Wallet</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row', backgroundColor: '#fff',
                        paddingHorizontal: 20, paddingVertical: 10,
                        borderRadius: 10, marginTop: 15,alignItems:'center'
                    }}>
                        <View style={{paddingRight:15}}>
                            <MaterialCommunityIcons name={'wallet-giftcard'} size={27} color={"orange"}  />
                        </View>
                        <View>
                            <Text style={{color:'gray',fontSize:15,fontWeight:'bold'}}>Das'Min Wallet</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row', backgroundColor: '#fff',
                        paddingHorizontal: 20, paddingVertical: 10,
                        borderRadius: 10, marginTop: 15,alignItems:'center'
                    }}>
                        <View style={{paddingRight:15}}>
                            <Ionicons name={'card'} size={27} color={"orange"}  />
                        </View>
                        <View>
                            <Text style={{color:'gray',fontSize:15,fontWeight:'bold'}}>Atm Card</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row', backgroundColor: '#fff',
                        paddingHorizontal: 20, paddingVertical: 10,
                        borderRadius: 10, marginTop: 15,alignItems:'center',marginBottom:20
                    }}>
                        <View style={{paddingRight:15}}>
                            <Entypo name={'credit-card'} size={27} color={"orange"}  />
                        </View>
                        <View>
                            <Text style={{color:'gray',fontSize:15,fontWeight:'bold'}}>Credit Card</Text>
                        </View>
                    </View>      
                </View>
                    <TouchableOpacity
                    style={{borderRadius: 20,
                            padding: 10,
                            elevation: 2,
                            backgroundColor: "#2196F3",
                          }}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={{color: "white",
                                fontWeight: "bold",
                              textAlign: "center",
                              paddingHorizontal:20
                          }}>
                              Close
                          </Text>
                    </TouchableOpacity>
                </View>
            </View>
              
      </Modal>
          <TouchableOpacity onPress={() => setModalVisible(true)}
              style={{ backgroundColor: '#eee', paddingVertical: 20, borderRadius: 30 }}>
            <Text style={{paddingLeft:20, fontSize:15,fontWeight:'bold',color:'black'}}>PAYMENT</Text>
        </TouchableOpacity>
          
    </View>
  );
};

export default Payment;
