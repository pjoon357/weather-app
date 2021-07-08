import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
      iconName: "",
      gradient: []
    },
    Drizzle: {
      iconName: "",
      gradient: []
    },
    Rain: {
      iconName: "",
      gradient: []
    },
    Snow: {
      iconName: "",
      gradient: []
    },
    Atmosphere: {
      iconName: "",
      gradient: []
    },
    Clear: {
      iconName: "",
      gradient: []
    },
    Clouds: {
      iconName: "cloudy-outline",
      gradient: ["#4DA0B0", "#D39D38"]
    },
    Haze: {
      iconName: "",
      gradient: []
    },
    Mist: {
      iconName: "",
      gradient: []
    },
    Dust: {
      iconName: "",
      gradient: []
    }
  };

export default function Weather({temp, condition}){
    return  <LinearGradient 
                colors={weatherOptions[condition].gradient}
                style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.halfcontainer}>
                    <Ionicons name={weatherOptions[condition].iconName} size={90} color="white" />
                    <Text style={styles.temp}>{temp}, {condition}</Text>
                </View>
                <View style={styles.halfcontainer}>

                </View>
            </LinearGradient>
    ;
};

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Mist",
        "Dust"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 30,
        color: "white"
    },
    halfcontainer: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
});