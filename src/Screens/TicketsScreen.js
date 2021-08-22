import React, {useEffect, useState} from "react";
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {TimisoaraColors} from "../Style/colors";
import NavigationBar from "../Components/NavigationBar";


const TICKETS = [
    {
        title: 'City Pass 1 Day',
        details: 'Timisoara City Pass gives you the freedom to do what you want, when you want, whilst making incredible savings: our passes include bucket list attractions, top tours, and plenty of hidden gems, all handpicked by our local experts. ',
        image: require('../../assets/tickets.png')
    },
    {
        title: 'Bilet de autobuz',
        image: require('../../assets/tickets.png')
    },
    {
        title: 'Muzeul satului Banatean',
        details: "Muzeul Satului Bănățean din Timișoara este singurul muzeu cu profil etnografic din România care cuprinde centrul civic al satului, format din Primărie, Biserică, Școală, Casă Națională (cu destinație culturală) și birt, în care se desfășoară majoritatea activităților cultural-educative și științifice ale unei localități. ",
        image: require('../../assets/tickets.png')
    },
    {
        title: 'Bilet de tren',
        image: require('../../assets/tickets.png')
    },
    {
        title: 'Muzeul de Arta Timisoara',
        details: "Muzeul de Artă din Timișoara este un muzeu de artă aflat în Palatul Baroc din Timișoara. Muzeul a luat ființă după desprinderea secțiunii de artă a Muzeului Banatului, care a funcționat o perioadă într-o aripă din actuala clădire. Muzeul a devenit instituție de sine stătătoare pe 1 ianuarie 2006, director fiind profesorul universitar Marcel Tolcea. O dată cu finalizarea unei bune părți din lucrările de restaurare a palatului și a spațiului expozițional, muzeul extins a putut fi inaugurat la 21 decembrie.",
        image: require('../../assets/tickets.png')
    },
    {
        title: 'City Pass 1 Day',
        details: 'Timisoara City Pass gives you the freedom to do what you want, when you want, whilst making incredible savings: our passes include bucket list attractions, top tours, and plenty of hidden gems, all handpicked by our local experts. ',
        image: require('../../assets/tickets.png')
    },
    {
        title: 'Bilet de autobuz',
        image: require('../../assets/tickets.png')
    },
    {
        title: 'Bilet de autobuz',
        image: require('../../assets/tickets.png')
    },
    {
        title: 'Bilet de autobuz',
        image: require('../../assets/tickets.png')
    },
    {
        title: 'Bilet de autobuz',
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