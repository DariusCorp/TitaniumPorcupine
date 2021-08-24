import React, {useEffect, useState} from "react";
import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {TimisoaraColors} from "../Style/colors";
import {TICKETS} from "../FakeBackend/Tickets";
import ExperienceCard from "../Components/ExperienceCard";
import NavigationBar from "../Components/NavigationBar";


const Title = () => {
    return (
        <Text style={styles.title}>
            Enjoy your trip!
        </Text>
    )
};


const SearchingExperience = () => {
    return (
        <View
            style={[styles.card, styles.cardFront]}
        >
            <ActivityIndicator color={TimisoaraColors.MikadoYellow} size={100}/>
            <Text style={styles.activityIndicatorText}>
                Working on your ticket...
            </Text>
        </View>
    );
};

const Ticket = ({navigation}) => {
    const [experience, setExperience] = useState(null);

    const onInit = () => {
        setExperience(null);
        setTimeout(() => {

            setExperience(TICKETS[0]);
        }, 3000);
    };

    useEffect(onInit, []);

    return (
        <View style={styles.screen}>
            <View style={styles.titleContainer}>
                <Title/>
            </View>

            <View style={styles.experiencePreviewContainer}>
                {
                    experience === null ?
                        <SearchingExperience/>
                        :
                        <ExperienceCard experience={experience}/>
                }
            </View>

            <NavigationBar navigation={navigation}/>
        </View>
    )
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: TimisoaraColors.White,
        alignItems: 'center'
    },

    titleContainer: {
        flex: 0.8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    experiencePreviewContainer: {
        flex: 3,
        width: '100%',
        justifyContent: 'center',
        marginBottom: 75
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingHorizontal: '10%',
        textAlign: 'center',
        color: TimisoaraColors.DarkLiver,
    },
    city: {
        fontSize: 30,
        color: TimisoaraColors.RaisinBlack,
    },

    button: {
        borderRadius: 50,
        backgroundColor: TimisoaraColors.MikadoYellow,
        paddingVertical: 10,
        paddingHorizontal: 24,
        elevation: 6
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: TimisoaraColors.RaisinBlack
    },
    activityIndicatorText: {
        color: TimisoaraColors.MikadoYellow,
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        padding: 10
    },
});


export default Ticket;