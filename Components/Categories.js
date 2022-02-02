import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'


const items = [
    {
        image: require("../assets/images/shopping-bag.png"),
        text:"Pick-up"
    },
    {
        image: require("../assets/images/soft-drink.png"),
        text:"Soft Drink"
    },
    {
        image: require("../assets/images/bread.png"),
        text:"Bakery Items"
    },
    {
        image: require("../assets/images/fast-food.png"),
        text:"Fast Food"
    },
    {
        image: require("../assets/images/coffee.png"),
        text:"Coffee"
    },
    {
        image: require("../assets/images/desserts.png"),
        text:"Desserts"
    },
]

const Categories = () => {
    return (
        <View style={{backgroundColor:'#fff', paddingLeft:20,marginTop:10,paddingVertical:10, }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                    items.map((data, index) => {
                        return(
                    <View key={index}>
                            <TouchableOpacity style={{ marginRight: 30,alignItems:'center' }}>
                                    <Image source={data.image} style={{ width:50, height:40,resizeMode:'contain'}} />
                                    <Text style={{fontSize:13,fontWeight:'900'}}>{data.text}</Text>
                            </TouchableOpacity>
                    </View>
                        )
                    })
                }
                </ScrollView>
        </View>
    )
}

export default Categories
