import React, { useState } from 'react';
import {View, Text, Image, ImageBackground, StyleSheet, Button} from 'react-native';
import Icon from "@expo/vector-icons/Entypo";
import { createStackNavigator } from '@react-navigation/stack';
import Detail from './Detail';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from "../navigation/Navigator"

const Home = ({navigation}) => {
    return(
        <View style={{
            backgroundColor:"#FFF",
            flex:1
        }}>
             <Image
                        source={require('../assets/images/pocketAI.jpg')}
                        style={{
                            height: 450,
                            width: 450,
                            borderRadius: 20,
                            alignSelf: "center",
                            marginTop: 200
                        }}
                    /> 
                    
            <View style={{
                alignSelf: "center", marginTop: 13,
            }}>

            
                    <Button
                        title="Enter the world of PocketAI"
                        color="#408F49"
                        onPress={()=>navigation.navigate('Detail')}/>  
            </View>
        </View>

    )
};
export default Home;