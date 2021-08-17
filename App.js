import _ from 'lodash';
import React from 'react';
import {Alert, ImageBackground, StyleSheet, Text, View} from 'react-native';

import CityPass from "./src/Screens/CityPass";
import Index from "./src/Screens/Index";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Planner from "./src/Screens/Planner";
import Generator from "./src/Screens/Generator";

const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={Index} />
                <Stack.Screen name="CityPass" component={CityPass} />
                <Stack.Screen name="Planner" component={Planner} />
                <Stack.Screen name="Generator" component={Generator} />
            </Stack.Navigator>
        </NavigationContainer>
    );

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignment: 'fill',
            width: '100%',
            height:'100%',
            // useless
            margin: 0
        },
        title: {
        },
        header: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'red',
            // useless
            padding: 0,
            margin: 0,
            marginLeft: 0,
            alignment: 'fill',
            alignItems: 'center',
            alignContent: 'center'
        }
    });

}

