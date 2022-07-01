import React from 'react'
import {View, Text, Image, useRef, useEffect, useState, ImageBackground, Button, TouchableOpacity} from 'react-native'
import Icon from "@expo/vector-icons/Entypo"


const Conversation = ({navigation}) => {
    return(
        <View style={{
            flex:1,
            height: "100%",
            backgroundColor:"#FFF",
            
        }}>
            <View style={{
                        flexDirection: "row",
                        width: "100%",
                        marginTop: 40
                    }}>
                <View style={{paddingLeft:20, marginTop: 10, flexDirection: 'row'}}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icon
                        name= "arrow-long-left"
                        size={30}
                        color= "#A6A6A6"
                        />
                    </TouchableOpacity>
                </View>
            
            <View style={{marginLeft:20, marginTop: 10, flexDirection: 'row'}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
                        <Icon
                        name= "home"
                        size={30}
                        color= "#A6A6A6"
                        />
                    </TouchableOpacity>
                    <View style={{marginLeft:280}}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icon
                        name= "user"
                        size={30}
                        color= "#A6A6A6"
                        />
                    </TouchableOpacity>  
                    </View>
                    </View>
                    </View>
                    <View style ={{
                    paddingHorizontal: 40,
                    marginTop: 10,
                    backgroundColor: '#A6A6A6',
                    height: 10,
                   
                }}>
            </View>
                    </View>
                    )}
                
                    
            
export default Conversation;