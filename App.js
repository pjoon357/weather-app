import React from 'react';
import Loading from './Loading';
import Weather from './Weather';
import {Alert} from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import environment from './environment';

const API_KEY = environment.REACT_APP_WEATHER_API_KEY;

export default class extends React.Component {
  state= {
    isLoading: true
  }

  getWeather = async (latitude,longitude) =>{
    const {data:{
      main:{temp},
      weather
    }} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric
    `);
    
    this.setState({isLoading: false, temp, condition: weather[0].main});
  }

  getLocation = async () =>{
    try {
      await Location.requestForegroundPermissionsAsync();
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude);
      console.log(latitude,longitude);
    } catch (error) {
      Alert.alert("Can't find you","so sad...");
    }
  }
  
  componentDidMount(){
    this.getLocation();
  }

  render (){
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}
