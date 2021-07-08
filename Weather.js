import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
      iconName: "thunderstorm-outline",
      gradient: ["#373B44", "#4286f4"],
      title: "Thunderstorm in the house",
      subtitle: "Actually, outside of the house"
    },
    Drizzle: {
      iconName: "cloud-offline-outline",
      gradient: ["#89F7FE", "#66A6FF"],
      title: "Drizzle",
      subtitle: "Is like rain, but gay 🏳️‍🌈"
    },
    Rain: {
      iconName: "rainy-outline",
      gradient: ["#00C6FB", "#005BEA"],
      title: "Raining like a MF",
      subtitle: "For more info look outside"
    },
    Snow: {
      iconName: "snow-outline",
      gradient: ["#7DE2FC", "#B9B6E5"],
      title: "Cold as balls",
      subtitle: "Do you want to build a snowman? Fuck no."
    },
    Atmosphere: {
      iconName: "cloud-offline-outline",
      gradient: ["#89F7FE", "#66A6FF"]
    },
    Clear: {
      iconName: "sunny-outline",
      gradient: ["#FF7300", "#FEF253"],
      title: "Sunny as fuck",
      subtitle: "Go get your ass burnt"
    },
    Clouds: {
      iconName: "cloud-outline",
      gradient: ["#D7D2CC", "#304352"],
      title: "Clouds",
      subtitle: "I know, fucking boring"
    },
    Mist: {
      iconName: "cloud-offline-outline",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "Mist!",
      subtitle: "It's like you have no glasses on."
    },
    Dust: {
      iconName: "cloud-offline-outline",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "Dusty",
      subtitle: "Thanks a lot China 🖕🏻"
    }
}

export default function Weather({temp, condition}){
    return  <LinearGradient 
                colors={weatherOptions[condition].gradient}
                style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.halfContainer}>
                    <Ionicons name={weatherOptions[condition].iconName} size={90} color="white" />
                    <Text style={styles.temp}>{temp}℃</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>
                        {weatherOptions[condition].subtitle}
                    </Text>
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
        flex:1
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
      title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24,
        textAlign: "left"
      },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start",
        paddingHorizontal: 40,
        justifyContent: "center",
        flex: 1
    }
});