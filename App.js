import React from 'react';
import {StyleSheet} from 'react-native';

import CityPass from "./src/Screens/CityPass";
import Index from "./src/Screens/Index";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Planner from "./src/Screens/Planner";
import Generator from "./src/Screens/Generator";
import DestinationDetail from "./src/Screens/DestinationDetail";
import Quiz from "./src/Screens/Quiz";
import Login from "./src/Screens/Login";
import ExperienceRandomizerScreen from "./src/Screens/ExperienceRandomizerScreen";
import {TimisoaraColors} from "./src/Style/colors";

const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{

            }}>
                <Stack.Screen name="Home" component={Index}
                              options={{
                                  headerShown: false
                              }}/>
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={Quiz} />
                <Stack.Screen name="Index" component={Index} />
                <Stack.Screen
                    name="ExperienceGenerator"
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
                <Stack.Screen name="Home" component={Index} />
                <Stack.Screen name="CityPass" component={CityPass} />
                <Stack.Screen name="Planner" component={Planner}/>
                <Stack.Screen name="Generator" component={Generator}/>
                <Stack.Screen name="DestinationDetail" component={DestinationDetail}/>
                <Stack.Screen name="Login" component={Login} />
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

