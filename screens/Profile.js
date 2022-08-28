import React from 'react'
import {View, Text, Image, useRef, useEffect, useState, ImageBackground, Button, TouchableOpacity, ScrollView, Animated} from 'react-native'
import Icon from "@expo/vector-icons/Entypo"
import "../assets/images/profile.jpg"


const Profile = ({navigation}) => {
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
                    </View>
                    </View>
                    <View style ={{
                    paddingHorizontal: 40,
                    marginTop: 10,
                    backgroundColor: '#A6A6A6',
                    height: 10,
                   
                }}>
            </View>

            <View style ={{
                 paddingHorizontal: 40,
                    backgroundColor: '#FFF',
                    height: '50%',
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                }}>
                    <View style={{
                        flexDirection: "row",
                        width: "100%",
                        marginTop: 40
                     }}>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.goBack()}
                            style={{
                                width: "50%",
                            }}
                        >


                        </TouchableOpacity>
                        

                   </View>

                    <Image
                        source={require('../assets/images/profile.jpg')}
                        style={{
                            height: 125,
                            width: 125,
                            borderRadius: 20,
                            alignSelf: "center",
                            marginVertical: 20
                       }}
                    />
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "bold",
                        color: "black",
                        alignSelf: "center",
                    }}>
                        @user_name
                    </Text>
                    <Text style={{
                        fontWeight: "500",
                        fontSize: 12,
                        color: "gray",
                        alignSelf: "center",
                        marginTop: 2
                    }}>
                        Pro Edition
                    </Text>
                    </View>
                







                    </View>
                    
                    )
                    }
                    
                
                    
            
export default Profile;







   
    