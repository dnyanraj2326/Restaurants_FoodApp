import { View, Text,ScrollView,TouchableOpacity,Image } from 'react-native';
import React from 'react';

const RecommendedItems = () => {
  return (
        <View style={{paddingBottom:20}}>
                <View>
                    <Text style={{color:'black', fontWeight:'bold', fontSize:18,paddingVertical:10,paddingLeft:20}}>Recommended items</Text>
                </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{flexDirection:'row',}}>
                    <TouchableOpacity style={{ width:100, marginRight:10,marginLeft:10, backgroundColor:'#eee', padding:15, borderRadius:30 }}>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }} style={{ width: 70, height: 70 ,borderRadius:15}} />
                        <Text style={{ textAlign:'center' }}>Mansoon Thali</Text>
                    </TouchableOpacity>
                        
                    <TouchableOpacity style={{ width:100, marginRight:10, backgroundColor:'#eee', padding:15, borderRadius:30 }}>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }} style={{ width: 70, height: 70 ,borderRadius:15}} />
                        <Text style={{ textAlign:'center' }}> Rose Ice Creem</Text>
                    </TouchableOpacity>
                        
                    <TouchableOpacity style={{ width:100, marginRight:10, backgroundColor:'#eee', padding:15, borderRadius:30 }}>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1564671165093-20688ff1fffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }} style={{ width: 70, height: 70 ,borderRadius:15}} />
                        <Text style={{ textAlign:'center' }}>Idli Sambar</Text>
                    </TouchableOpacity>
                        
                    <TouchableOpacity style={{ width:100, marginRight:10, backgroundColor:'#eee', padding:15, borderRadius:30 }}>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1518983546435-91f8b87fe561?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }} style={{ width: 70, height: 70 ,borderRadius:15}} />
                        <Text style={{ textAlign:'center' }}>Moomose</Text>
                    </TouchableOpacity>
                            
                    <TouchableOpacity style={{ width:100, marginRight:10, backgroundColor:'#eee', padding:15, borderRadius:30 }}>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" }} style={{ width: 70, height: 70 ,borderRadius:15}} />
                        <Text style={{ textAlign:'center' }}>Chiken Chinese</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
  );
};

export default RecommendedItems;
