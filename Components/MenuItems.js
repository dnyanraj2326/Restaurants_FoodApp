import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MenuItemsData from './MenuItemsData';
import {connect} from 'react-redux';
import {addToCart} from './Redux/Foods/food-actions';

const MenuItems = ({foodItems, addToCart}) => {
  return (
    <View style={{backgroundColor: '#eee'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          paddingHorizontal: 15,
          alignItems: 'center',
          backgroundColor: '#fff',
          marginBottom: 2,
          paddingVertical: 10,
        }}>
        <View style={{paddingRight: 20}}>
          <Image
            source={{uri: foodItems.image}}
            style={{width: 80, height: 80, borderRadius: 5}}
          />
        </View>
        <View style={{flex: 2, paddingRight: 10}}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
              paddingBottom: 2,
            }}>
            {foodItems.title}
          </Text>
          <Text style={{fontSize: 13}}>{foodItems.discription}</Text>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
              paddingTop: 6,
            }}>
            ${foodItems.price}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => addToCart(foodItems.id)}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 8,
              backgroundColor: 'green',
              borderRadius: 20,
            }}>
            <Text style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(MenuItems);
