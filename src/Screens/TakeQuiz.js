import React, {Component} from 'react';
import {View} from 'react-native-ui-lib';
import NavigationBar from "../Components/NavigationBar";
import {TimisoaraColors} from "../Style/colors";
import {Image, Text, TouchableOpacity} from "react-native";

const CardQuiz = ({onPress}) => {

    return(
        <TouchableOpacity onPress={ onPress}
                          style={{

                              marginHorizontal: 10,
                              marginVertical: 8,
                              height: 450,
                              width: 300,
                              borderRadius: 20,
                              shadowColor: TimisoaraColors.RaisinBlack,
                              shadowOffset: {width: 0, height: 0},
                              shadowOpacity: 0.3,
                              shadowRadius: 15,
                              elevation: 7


                          }}
        >

            <View
                style={{
                    height: "100%",
                    width: "100%",
                    backgroundColor: TimisoaraColors.WindsonTan,
                    borderRadius: 20,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: "center",

                }}
            >
                <Image
                    source={require('../../assets/AGATRON.png')}
                    style={{
                        borderRadius: 50,
                        height: 100,
                        width: 100,
                        marginVertical: 20,

                    }}
                />
                <Text style={{fontSize: 40, marginTop: 50}}>TAKE QUIZ !</Text>
                <Text style={{fontSize: 15, marginTop: 15 }}>And let us prepare you your best trip still!</Text>
            </View>
        </TouchableOpacity>
    );
}

const TakeQuiz = ({navigation}) => {

        return (
            <View style={{flex: 1, backgroundColor: TimisoaraColors.MikadoYellow, justifyContent: "center", alignItems: "center"}}>
                <CardQuiz onPress={() => navigation.replace("Quiz")}/>
            </View>
        );
}


export default TakeQuiz;