import React, {useEffect, useState} from "react";
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {TimisoaraColors} from "../Style/colors";
import NavigationBar from "../Components/NavigationBar";


const TICKETS = [
    {
        title: 'Muzeu',
        details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        image: require('../../assets/tickets.png')
    },
    {
        title: 'Muzeu',
        details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        image: require('../../assets/tickets.png')
    },
    {
        title: 'Muzeu',
        details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        image: require('../../assets/tickets.png')
    },
    {
        title: 'Muzeu',
        details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        image: require('../../assets/tickets.png')
    },
    {
        title: 'Muzeu',
        details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        image: require('../../assets/tickets.png')
    },
    {
        title: 'Muzeu',
        details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        image: require('../../assets/tickets.png')
    },
    {
        title: 'Muzeu',
        details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        image: require('../../assets/tickets.png')
    },
    {
        title: 'Muzeu',
        details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        image: require('../../assets/tickets.png')
    },
    {
        title: 'Muzeu',
        details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        image: require('../../assets/tickets.png')
    },
    {
        title: 'Muzeu',
        details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        image: require('../../assets/tickets.png')
    },
    {
        title: 'Muzeu',
        details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        image: require('../../assets/tickets.png')
    },
    {
        title: 'Muzeu',
        details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        image: require('../../assets/tickets.png')
    },
    {
        title: 'Muzeu',
        details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        image: require('../../assets/tickets.png')
    },
];


const TicketCard = ({navigation, ticket}) => {
    const onPress = () => {
        navigation.navigate('TicketDetails', {ticket: ticket})
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            key={`${Math.random()}`}
            style={{
                backgroundColor: TimisoaraColors.MikadoYellow,
                height: 130,
                width: '90%',
                marginVertical: 10,
                borderRadius: 30,
                elevation: 8,
                padding: 15,
                flexDirection: 'row'
            }}
        >
            <View
                style={{
                    flex: 1,
                    marginRight: 10,
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        flex: 1,
                        textAlignVertical: 'center'
                    }}
                >
                    {
                        ticket.title
                    }
                </Text>
                <Text
                    style={{
                        fontSize: 18,
                        flex: 1,
                        textAlignVertical: 'center'
                    }}
                >
                    {
                        'Ora 10:30'
                    }
                </Text>

            </View>
            <View
                style={{
                    width: 100,
                    height: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Image
                    source={ticket.image}
                    resizeMode={'cover'}
                    style={{
                        height: '100%',
                        width: '100%'
                    }}
                />
            </View>


        </TouchableOpacity>
    );
};


const TicketsScreen = ({navigation}) => {
    const [tickets, setTickets] = useState([]);

    useEffect(
        () => {
            setTickets(TICKETS)
        },
        []
    );

    return (
        <View
            style={{flex: 1}}
        >
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: TimisoaraColors.White,
                }}
                contentContainerStyle={{
                    alignItems: "center",
                    paddingVertical: 20
                }}
            >
                {
                    tickets.map(
                        (ticket) => <TicketCard ticket={ticket} navigation={navigation}/>
                    )
                }
            </ScrollView>
            <NavigationBar/>
        </View>
    )
};


export default TicketsScreen;