import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';



export const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
      description:"Restaurant Restaurant description. Availability. Check rates, availability, and book online with our secure reservation system. Best Price Guarantee."
    },
    {
      name: "Benihana",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Aus-Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
      description:"Restaurant Restaurant description. Availability. Check rates, availability, and book online with our secure reservation system. Best Price Guarantee."
    },
    {
      name: "India's Grill",
      image_url:
        "https://images.unsplash.com/photo-1596561260970-66b073f956a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      categories: ["Indian-Cafe", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
      description:"Restaurant Restaurant description. Availability. Check rates, availability, and book online with our secure reservation system. Best Price Guarantee."
    },
    {
        name: "Authantic Ambersariya",
        image_url:
          "https://images.unsplash.com/photo-1600353565737-2427a1ba3d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        categories: ["Indian-Hotel", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.2,
        description:"Restaurant Restaurant description. Availability. Check rates, availability, and book online with our secure reservation system. Best Price Guarantee."
      },

      {
        name: "Petter cafe",
        image_url:
          "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        categories: ["Indian-Bar", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.6,
        description:"Restaurant Restaurant description. Availability. Check rates, availability, and book online with our secure reservation system. Best Price Guarantee."
      },
];
  

const RestaurantItems = () => {
  const navigation = useNavigation();

    return (
        <TouchableOpacity activeOpacity={0.1} style={{ marginBottom: 30 }}>
            {localRestaurants.map((restaurant,index) => (
              <TouchableOpacity onPress={() => navigation.push('About', {
                image: restaurant.image_url,
                name:restaurant.name,
                price: restaurant.price,
                categories: restaurant.categories,
                rating: restaurant.rating,
                reviews:restaurant.reviews
                })} key={index}
                    style={{ padding: 15, backgroundColor: '#fff', marginTop: 10 }}>
                <RestaurantImage image={restaurant.image_url} />
                <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                </TouchableOpacity>
                ))}
        </TouchableOpacity>
    )
}

const RestaurantImage = (props) => (
    <View>
        <Image source={{ uri: props.image }}
            style={{ width: '100%', height: 180 }} />
        <TouchableOpacity style={{position:'absolute', right:20,top:20}}>
            <Ionicons name='heart-outline' style={{fontSize:22,color:'#fff'}} />
        </TouchableOpacity>
    </View>
);

const RestaurantInfo = (props) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:10
    }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>{props.name}</Text>
            <Text style={{fontSize:13, color:'gray'}}>30-45 - min</Text>
        </View>
        <View style={{
            backgroundColor: '#eee',
            alignItems:'center',
            width: 30,
            height: 30,
            justifyContent:'center',
            borderRadius:15
        }}>
            <Text>{props.rating}</Text>
        </View>
    </View>
)

export default RestaurantItems
