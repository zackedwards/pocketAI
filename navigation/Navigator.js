import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import { NavigationContainer } from '@react-navigation/native'
import {Image, useRef, useEffect, useState, View} from 'react-native'
import Icon from "@expo/vector-icons/Entypo"
import Text_Generator from '../screens/Text_Generator'
import Analysis from '../screens/Analysis'
import Summarization from '../screens/Summarization'
import Question_Answering from '../screens/Question_Answering'
import Multiple_Choice from '../screens/Multiple_Choice'
import Conversation from '../screens/Conversation'
import Profile from '../screens/Profile'



const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigator = () => {
    return(
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name="HomeScreen" component={Home}/>
                <Stack.Screen name="Detail" component={Detail}/>
                <Stack.Screen name="Text_Generator" component={Text_Generator}/>
                <Stack.Screen name="Analysis" component={Analysis}/>
                <Stack.Screen name="Summarization" component={Summarization}/>
                <Stack.Screen name="Question_Answering" component={Question_Answering}/>
                <Stack.Screen name="Multiple_Choice" component={Multiple_Choice}/>
                <Stack.Screen name="Conversation" component={Conversation}/>
                <Stack.Screen name="ProfileScreen" component={Profile}/>
            </Stack.Navigator>
    )
}

export default HomeStackNavigator;