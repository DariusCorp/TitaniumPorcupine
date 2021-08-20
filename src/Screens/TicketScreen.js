import React from "react";
import {Image, ScrollView, Text, View} from "react-native";
import NavigationBar from "../Components/NavigationBar";
import {TimisoaraColors} from "../Style/colors";


const TicketScreen = ({navigation, route}) => {
    const {ticket} = route.params;

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: TimisoaraColors.White
            }}
        >
            <ScrollView
                style={{
                    flex: 1
                }}
                contentContainerStyle={{
                    alignItems: "center",
                    paddingVertical: '10%'
                }}
            >
                <View
                    style={{
                        borderWidth: 3,
                        borderColor: TimisoaraColors.MikadoYellow,
                        borderRadius: 20,
                        padding: 10
                    }}
                >
                    <Image
                        source={require('../../assets/QrCodeExample.png')}
                        style={{
                            width: 300,
                            height: 300,
                        }}
                    />
                </View>

                <View
                    style={{
                        flex: 1,
                        borderWidth: 0,
                        borderTopColor: TimisoaraColors.MikadoYellow,
                        borderTopWidth: 2,
                        marginVertical: 20,
                        width: '90%',
                    }}
                >
                    <Text
                        style={{
                            color: TimisoaraColors.RaisinBlack,
                            fontSize: 22,
                            textAlign: "center",
                            paddingVertical: 10,
                            fontWeight: 'bold',
                            borderBottomColor: TimisoaraColors.MikadoYellow,
                            borderBottomWidth: 1,
                        }}
                    >
                        {
                            ticket.title
                        }
                    </Text>
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 18,
                            paddingVertical: 10,
                            borderBottomColor: TimisoaraColors.MikadoYellow,
                            borderBottomWidth: 1
                        }}
                    >
                        {
                            ticket.details
                        }
                    </Text>
                </View>

            </ScrollView>
            <NavigationBar/>
        </View>
    )
};


export default TicketScreen;