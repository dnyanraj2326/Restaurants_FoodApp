import { View, Text,Image,ScrollView,TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';


const About = ({route}) => {
    const { image } = route.params;
    const { name } = route.params;
    const { price } = route.params;
    const { categories } = route.params;
    const { rating } = route.params;
    const { description } = route.params;
    return (
        <View style={{ flex: 1, backgroundColor:'#fff'}}>
          <View>
          <Image source={{ uri: image }}
            style={{ width: '100%', height:400 }} />
          </View>
          <View style={{flexDirection:'row', paddingTop:7,justifyContent:'space-between',paddingHorizontal:20}}>
              <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>{name}</Text>
              <Text>{price}</Text>
            </View>
            <View style={{flexDirection:'row', paddingTop:7,justifyContent:'space-between',paddingHorizontal:20}}>
                <Text style={{ fontSize: 16, color: 'black' }}>{categories[0]}</Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Ionicons name='ios-star' style={{ fontSize: 22, color: 'orange' }} />
                    <Text style={{paddingLeft:5}}>{rating}</Text>
                </View>
              
            </View>
            <View style={{ paddingTop:7,paddingHorizontal:20}}>
              <Text style={{fontSize:14, color:'black',paddingBottom:4}}>Description</Text>
                <Text>{description}</Text>
            </View>
           
            <View style={{ paddingHorizontal: 20 }}>
                <View>
                    <Text style={{color:'black', fontWeight:'bold', fontSize:18,paddingVertical:10}}>Items</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{ width:100, marginRight:10, backgroundColor:'#eee', padding:15, borderRadius:30 }}>
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
            <View style={{paddingTop: 30, paddingHorizontal:50}}>
                <TouchableOpacity 
                   
            style={{backgroundColor: '#5AA897',
        paddingVertical: 15,
        paddingHorizontal: 50,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10}}>
            <Text style={{color: "black",
        fontWeight: 'bold',
        fontSize:17}}>Add To Cart</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default About;
