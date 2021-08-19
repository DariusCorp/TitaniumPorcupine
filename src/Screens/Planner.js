import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, Colors, Incubator, ActionBar} from 'react-native-ui-lib';
import _ from "lodash";
import home from "../../assets/home.png";
import search from "../../assets/search.png";
import stars from "../../assets/stars.png";
import tickets from "../../assets/tickets.png";
import profile from "../../assets/profile.png";
import NavigationBar from "../Components/NavigationBar";
import {TimisoaraColors} from "../Style/colors";

class TouchableOpacityScreen extends Component {




    render() {

        return (
            <View style={{flex: 1, backgroundColor: TimisoaraColors.White}}>
                <View style={{flex: 1}}></View>
                <NavigationBar/>
            </View>
        );
    }
}

export default TouchableOpacityScreen;