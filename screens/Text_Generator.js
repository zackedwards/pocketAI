import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, Button, TextInput, TextOutput, TouchableOpacity } from 'react-native'
import Icon from "@expo/vector-icons/Entypo"
import Slider from '@react-native-community/slider'
import { Constants } from 'expo'



const Text_Generator = ({ navigation }) => {
    return (
        // background
        <View style={{
            flex: 1,
            height: "100%",
            backgroundColor: "#FFF",

        }}>
            <View style={{ // header
                flexDirection: "row",
                width: "100%",
                marginTop: 40
            }}>
                {/* back button */}
                <View style={{ paddingLeft: 20, marginTop: 10, flexDirection: 'row' }}> 
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon
                            name="arrow-long-left"
                            size={30}
                            color="#A6A6A6"
                        />
                    </TouchableOpacity>
                </View>
                {/* home button */}
                <View style={{ marginLeft: 20, marginTop: 10, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                        <Icon
                            name="home"
                            size={30}
                            color="#A6A6A6"
                        />
                    </TouchableOpacity>
                    {/* profile button */}
                    <View style={{ marginLeft: 280 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon
                                name="user"
                                size={30}
                                color="#A6A6A6"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* background styling */}
            <View style={{
                paddingHorizontal: 40,
                marginTop: 10,
                backgroundColor: '#A6A6A6',
                height: 10,

            }}>
                
            </View>
            <View style={{
                backgroundColor: "#A6A6A6",
                paddingVertical: 15,
                paddingHorizontal: 20,
                marginHorizontal: 20,
                borderRadius: 15,
                marginTop: 15,
                flexDirection: "row",
                alignItems: "center",

            }}>
                {/* icon */}
                <Icon
                    name="magnifying-glass"
                    size={30}
                    color="#408F49"
                />

                {/* input */}
                <TextInput
                    placeholder="What is the current stock market trend?"
                    placeholderTextColor="#FFF"
                    style={{
                        fontWeight: "300",
                        fontSize: 12.5,
                        width: 260,
                        marginLeft: 10,
                    }}
                />
            </View>





                        {/* slider */}
            <View style={{ backgroundColor: "#FFF", paddingHorizontal: 20, paddingVertical: 20, alignItems: 'center' }}>
                <Slider
                    style={{ width: 375, height: 50 }}
                    minimumValue={0}
                    maximumValue={750}
                    minimumTrackTintColor="#408F49"
                />

            </View>

            <View style={{
                backgroundColor: "#A6A6A6",
                paddingVertical: 200,
                paddingHorizontal: 20,
                marginHorizontal: 20,
                borderRadius: 15,
                marginTop: 5,
                flexDirection: "row",
                alignItems: "center",

            }}>
                {/* icon */}
                <View style={{ marginTop: -340 }}>
                    <Icon
                        name="light-bulb"
                        size={30}
                        color="#408F49"
                    />
                </View>
                {/* output */}
                <TextOutput
                    placeholder="The current stock market rally is largely driven by fears of an economic downturn, with the potential for higher interest rates and an interest rate hike by the Fed.
                        If China, Greece, and the European Union follow the same policies as the United States, the result will be a recession which could last longer than expected.
                        To understand why this is a dangerous environment for the economy, we must first understand what exactly are the risks that the economy is facing due to globalization and trade."
                        placeholderTextColor="#FFF"
                    
                    // style
                    style={{

                        fontWeight: "300",
                        fontSize: 12.5,
                        width: 260,
                        marginLeft: 10,
                        marginTop: -340,
                    }}
                />
            </View>
        </View>
    )
}



export default Text_Generator;