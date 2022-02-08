import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Categories from '../Components/Categories';
import HeaderTab from '../Components/HeaderTab';
import RestaurantItems, {localRestaurants} from '../Components/RestaurantItems';
import SearchBar from '../Components/SearchBar';

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#eee', height: '100%'}}>
      <View style={{backgroundColor: '#fff', padding: 15}}>
        <HeaderTab />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
