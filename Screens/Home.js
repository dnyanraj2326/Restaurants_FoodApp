import React, { useState, useEffect } from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Categories from '../Components/Categories';
import HeaderTab from '../Components/HeaderTab';
import RestaurantItems, {localRestaurants} from '../Components/RestaurantItems';
import SearchBar from '../Components/SearchBar';

// const YELP_API_KEY = "djDmzg_blqxlQDd8E_jVBz8x8RC7LLOCPKhAztsPpRK2K91PE5Bf5gkW0c1UIfLCzLF501OnHJ6KoaxJiuTwPyFdtqfEuCBISh9-yMv61dUqfJDxwaWaAW4niKACYnYx";

const Home = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);

  // const getRestaurantFromYelp = () => {
  //   const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Hollywood";
  //   const apiOptions = {
  //     headers: {
  //       Authorization: `Bearer ${YELP_API_KEY}`,
  //     }
  //   }

  //   return fetch(yelpUrl, apiOptions)
  //   .then((res) => res.json())
  //   .then((json) => setRestaurantData(json.businesses))
  // };

  // useEffect(() => {
  //   getRestaurantFromYelp();
  // }, []);
  

  return (
    <SafeAreaView style={{backgroundColor: '#eee', height: '100%'}}>
      <View style={{backgroundColor: '#fff', padding: 15}}>
        <HeaderTab />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantdata={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
