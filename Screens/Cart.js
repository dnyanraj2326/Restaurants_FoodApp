import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import LottieView from 'lottie-react-native';
import React, {useState, useEffect} from 'react';
import CartCard from '../Components/CartCard';
import {connect} from 'react-redux';

const Cart = ({navigation, cart}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let price = 0;
    let items = 0;

    cart.forEach(item => {
      (items += item.qty), (price += items * item.price);
    });
    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalItems, totalPrice, setTotalItems, setTotalPrice]);

  let shippingCharges = 20;
  let allIncPrice = totalPrice + shippingCharges;

  // if (cart.length > 0) {
  //   var shippingCharges = 20;
  //   var allIncPrice = totalPrice + shippingCharges;
  // } else {
  //   var allIncPrice = 0;
  // }

  return (
    <View
      style={{
        flex: 1,
        marginTop: 28,
        backgroundColor: '#D6E5FA',
        paddingTop: 20,
        height: '100%',
      }}>
      <View style={{paddingHorizontal: 20}}>
        <StatusBar backgroundColor="#D6E5FA" barStyle="dark-content" />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
            paddingBottom: 28,
          }}>
          My Cart
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{height: '60%'}}>
          {cart.length > 0 ? (
            <View>
              {cart.map((item, ind) => (
                <CartCard key={ind} itemData={item} />
              ))}
            </View>
          ) : (
            <View style={{paddingTop: 90}}>
              <Text style={{textAlign: 'center', fontSize: 20, color: 'green'}}>
                No items in your cart !
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}>
                <LottieView
                  source={require('../assets/icon/17100-food.json')}
                  autoPlay
                  style={{height: 300, width: 300}}
                />
              </View>
            </View>
          )}
        </ScrollView>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
        }}>
        <View style={{paddingHorizontal: 35, paddingTop: 15}}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
            ({totalItems}) Items in cart
          </Text>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 10,
                paddingBottom: 10,
                borderBottomColor: '#eee',
                borderBottomWidth: 1,
              }}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
                Sub Total
              </Text>
              <Text style={{color: '#000'}}>${totalPrice}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 10,
                paddingBottom: 10,
                borderBottomColor: '#eee',
                borderBottomWidth: 1,
              }}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
                Shiping
              </Text>
              <Text style={{color: '#000'}}>
                ${cart.length > 0 ? shippingCharges : '$0'}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 10,
                paddingBottom: 10,
              }}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
                Total
              </Text>
              <Text style={{color: '#000', fontWeight: 'bold'}}>
                ${cart.length > 0 ? allIncPrice : '$00'}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('PaymentSuccesful')}
            style={{
              paddingHorizontal: 30,
              paddingVertical: 15,
              backgroundColor: '#2C3333',
              borderRadius: 40,
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#fff',
                textAlign: 'center',
              }}>
              Order Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = state => {
  return {
    cart: state.order.cart,
  };
};

export default connect(mapStateToProps)(Cart);
