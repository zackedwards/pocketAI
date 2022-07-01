import React from 'react'
import {View, Text, Image, useRef, useEffect, useState, ImageBackground, Button, TouchableOpacity} from 'react-native'
import Icon from "@expo/vector-icons/Entypo"


const Detail = ({navigation}) => {
    return(
        <View style={{
            flex:1,
            height: "100%",
            backgroundColor:"#FFF",
            
        }}>
            <View style={{
                        flexDirection: "row",
                        width: "100%",
                        marginTop: 10
                    }}>
                <View style={{paddingLeft:20, marginTop: 50, flexDirection: 'row'}}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icon
                        name= "arrow-long-left"
                        size={30}
                        color= "#408F49"
                        />
                    </TouchableOpacity>
                </View>
                
            </View>
            <View style={{flexDirection: "row", marginTop: -10, alignSelf: 'center', marginLeft: 90}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Text_Generator')}>
                <Image
                        source={require('../assets/images/Text_Generator.jpg')}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            alignSelf: "center",
                            marginTop: 100,
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Analysis')}>
                <Image
                        source={require('../assets/images/Analysis.jpg')}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            alignSelf: "center",
                            marginTop: 100,
                            marginHorizontal: 100
                        }}
                    />
                </TouchableOpacity>                 
            </View>
            <View style={{flexDirection: "row", marginTop: 100, alignSelf: 'center', marginLeft: 90}}> 
                <TouchableOpacity onPress={()=>navigation.navigate('Summarization')}>                       
                <Image
                        source={require('../assets/images/Summarization.jpg')}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            alignSelf: "center",
                            marginTop: -10
                        }}
                    /> 
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Question_Answering')}> 
                <Image
                        source={require('../assets/images/Question_Answering.jpg')}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            alignSelf: "center",
                            marginTop: -10,
                            marginHorizontal: 100
                        }}
                    />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", marginTop: 100, alignSelf: 'center', marginLeft: 90}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Multiple_Choice')}>                       
                <Image
                        source={require('../assets/images/Multiple_Choice.jpg')}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            alignSelf: "center",
                            marginTop: -10
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Conversation')}>
                <Image
                        source={require('../assets/images/Conversation.jpg')}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            alignSelf: "center",
                            marginTop: -10,
                            marginHorizontal: 100
                        }}
                    />
                </TouchableOpacity>
            </View>
                <View style={{marginTop: 120, alignSelf: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: "bold", color: "#408F49"}}>
                        <Text>Please Select Module</Text>
                    </Text>
                </View>
        </View>
    )
}
export default Detail;