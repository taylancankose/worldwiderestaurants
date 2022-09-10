import Geolocation from '@react-native-community/geolocation';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCityID, setLocation} from '../../redux/restaurantSlice';
import axios from 'axios';
function Home() {
  const dispatch = useDispatch();
  const city = useSelector(state => state.restaurants.city);
  const cityID = useSelector(state => state.restaurants.cityID);

  useEffect(() => {
    dispatch(getCityID());
  }, []);
  console.log(cityID);
  return (
    <View>
      <Text>Home</Text>
      <Button title="ads" />
    </View>
  );
}

export default Home;
