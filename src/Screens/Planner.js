import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, Colors, Incubator, ActionBar} from 'react-native-ui-lib';
import _ from "lodash";
import home from "../../assets/home.png";
import search from "../../assets/search.png";
import stars from "../../assets/stars.png";
import tickets from "../../assets/tickets.png";
import profile from "../../assets/profile.png";

class TouchableOpacityScreen extends Component {




    render() {

        return (
            <View bg-dark80 flex padding-20>
                <ActionBar
                    centered
                    actions={_.map([home, search, stars, tickets, profile], iconSource => ({
                        iconSource,
                        iconStyle: {width: 25, height: 25}
                    }))}
                />
            </View>
        );
    }
}

export default TouchableOpacityScreen;