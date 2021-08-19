import React from "react";
import {Image, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import {TimisoaraColors} from "../Style/colors";
import home from "../../assets/home.png";
import search from "../../assets/search.png";
import tickets from "../../assets/tickets.png";

const NavigationItem = ({name, icon, target}) => {
    return (
        <TouchableOpacity
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Image
                source={icon}
                style={{
                    width: 22,
                    height: 22,
                }}
            />
            <Text
                style={{
                    fontWeight: 'bold',
                    color: TimisoaraColors.DarkLiver
                }}
            >
                {
                    name
                }
            </Text>
        </TouchableOpacity>
    )
};


const NavigationMenu = () => {
    return (
        <View
            style={{
                width: '100%',
                height: 50,
                flexDirection: 'row',
                borderTopWidth: 0,
                borderTopColor: TimisoaraColors.DirtyWhite,
            }}
        >
            <NavigationItem name={'Home'} icon={home}/>
            <NavigationItem name={'Search'} icon={search}/>
            <NavigationItem name={'Tickets'} icon={tickets}/>
        </View>
    );
};

export default NavigationMenu