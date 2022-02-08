import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuItemsData from './MenuItemsData';

const MenuItems = () => {
  return (
    <View style={{backgroundColor: '#eee'}}>
      {MenuItemsData.map((product, index) => {
        const [select, setSelect] = useState();
        return (
          <View
            key={index}
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
            <TouchableOpacity
              onPress={() => setSelect(!select)}
              style={{paddingRight: 15}}>
              <MaterialCommunityIcons
                name={select ? 'checkbox-marked' : 'checkbox-blank-outline'}
                size={27}
                color={select ? 'green' : 'black'}
              />
            </TouchableOpacity>
            <View style={{flex: 2, paddingRight: 10}}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: 'bold',
                  paddingBottom: 2,
                }}>
                {product.title}
              </Text>
              <Text style={{fontSize: 13}}>{product.discription}</Text>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: 'bold',
                  paddingTop: 6,
                }}>
                ${product.price}
              </Text>
            </View>
            <View>
              <Image
                source={{uri: product.image}}
                style={{width: 80, height: 80, borderRadius: 5}}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default MenuItems;
