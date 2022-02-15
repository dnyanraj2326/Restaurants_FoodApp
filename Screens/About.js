import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MenuItems from '../Components/MenuItems';
import RecommendedItems from '../Components/RecommendedItems';
import {connect} from 'react-redux';

const About = ({route, navigation, products, cart}) => {
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    let count = 0;
    cart.forEach(item => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);
  const {image, name, price, categories, rating, reviews} = route.params;

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar translucent backgroundColor="transparent" />
      <View>
        <Image source={{uri: image}} style={{width: '100%', height: 200}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 7,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          {name}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 7,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingBottom: 20,
          borderBottomColor: '#eee',
          borderBottomWidth: 1,
        }}>
        <Text style={{fontSize: 16, color: 'black'}}>{categories[0]}</Text>
        <Text>{price}</Text>
        <Text>Review ({reviews})</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name="ios-star" style={{fontSize: 22, color: 'orange'}} />
          <Text style={{paddingLeft: 5}}>{rating}</Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{position: 'relative'}}>
        {products.map((food, index) => (
          <MenuItems key={index} foodItems={food} />
        ))}
        <RecommendedItems />
      </ScrollView>
      <View
        style={{
          paddingHorizontal: 50,
          backgroundColor: 'transparent',
          position: 'absolute',
          bottom: 30,
          left: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}
          style={{
            backgroundColor: '#5AA897',
            paddingVertical: 15,
            paddingHorizontal: 50,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderRadius: 10,
          }}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 17}}>
            Add To Cart
          </Text>
          <Text
            style={{
              paddingLeft: 20,
              color: '#000',
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            {cartCount}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    products: state.order.products,
    cart: state.order.cart,
  };
};

export default connect(mapStateToProps)(About);
