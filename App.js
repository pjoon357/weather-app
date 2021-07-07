import React from 'react';
import Loading from './Loading';
import {Alert} from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = "8c2e23859264b2354dc719b8b0338e80";

export default class extends React.Component {
  state= {
    isLoading: true
  }

  getWeather = async (latitude,longitude) =>{
    const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}
    `);
    console.log(data);
  }

  getLocation = async () =>{
    try {
      await Location.requestForegroundPermissionsAsync();
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude);
      this.setState({isLoading: true});
    } catch (error) {
      Alert.alert("Can't find you","so sad...");
    }
  }
  
  componentDidMount(){
    this.getLocation();
  }

  render (){
    const {isLoading} = this.state;
    return isLoading ? <Loading/> : null;
  }
}