import { View, Text, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
const List = [
    {
      _id : 1, 
      price: 500,
      shares: 130,
      lines: 1000,
    },
    {
      _id: 2,
      price: 700,
      shares: 140,
      lines: 650,
    },
  ];

 

  

const Cart = () => {
    const [num, setNum] = useState(1);

    const incrementCount = ()=> {
        setNum(num + 1);
      };
    
      const decrementCount = ()=> {
        if (num > 1) {
          setNum(num - 1);
        } else {
          setNum(1);
        }
      };
  return (
      <View>
          {
              List.map((product, i) => (
                  <View>
                      <View>
                          <Text>{product.price}</Text>
                      </View>
                      <View>
                          <Text>{num}</Text>
                      </View>
                      <View>
                          <TouchableOpacity onPress={()=>incrementCount(product._id)}>
                              <Text>Increement</Text>
                          </TouchableOpacity>

                        <TouchableOpacity onPress={()=> decrementCount(product._id)}>
                              <Text>Decrement</Text> 
                        </TouchableOpacity>
                        </View>
                </View>
              ))
          }
    </View>
  );
};

export default Cart;
