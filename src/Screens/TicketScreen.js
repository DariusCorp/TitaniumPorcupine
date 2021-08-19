import React from "react";
import {ScrollView, View} from "react-native";
import NavigationBar from "../Components/NavigationBar";


const TicketScreen = ({navigation, route}) => {
    const {ticket} = route.params;

    return (
        <View
            style={{
                flex: 1
            }}
        >
            <ScrollView
                style={{
                    flex: 1
                }}
            >

            </ScrollView>
            <NavigationBar/>
        </View>
    )
};


export default TicketScreen;