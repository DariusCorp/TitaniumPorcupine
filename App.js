import React from 'react';
import {StyleSheet} from 'react-native';

import CityPass from "./src/Screens/CityPass";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Planner from "./src/Screens/Planner";
import DestinationDetail from "./src/Screens/DestinationDetail";
import Quiz from "./src/Screens/Quiz";
import ExperienceRandomizerScreen from "./src/Screens/ExperienceRandomizerScreen";
import {TimisoaraColors} from "./src/Style/colors";
import MainScreen from "./src/Screens/MainScreen";
import TicketsScreen from "./src/Screens/TicketsScreen";
import TicketScreen from "./src/Screens/TicketScreen";

const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{}}>
                <Stack.Screen name="Home" component={MainScreen}
                              options={{
                                  headerShown: false
                              }}/>

                <Stack.Screen
                    name="Generator"
                    component={ExperienceRandomizerScreen}
                    options={{
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: TimisoaraColors.MikadoYellow,
                        },
                        headerTintColor: TimisoaraColors.DarkLiver,
                        title: 'Timisoara'
                    }}
                />
                <Stack.Screen name="CityPass" component={CityPass}/>
                <Stack.Screen name="Planner" component={Planner}/>
                <Stack.Screen name="DestinationDetail" component={DestinationDetail}/>
                <Stack.Screen name="Login" component={TicketsScreen}/>
                <Stack.Screen name="TicketDetails" component={TicketScreen}/>
                <Stack.Screen name="Quiz" component={Quiz}/>
            </Stack.Navigator>
        </NavigationContainer>
    );

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignment: 'fill',
            width: '100%',
            height: '100%',
            // useless
            margin: 0
        },
        title: {},
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

