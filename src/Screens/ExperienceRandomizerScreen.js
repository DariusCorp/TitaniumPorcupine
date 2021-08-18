import React, {useEffect, useState} from "react";
import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {TimisoaraColors} from "../Style/colors";
import {EXPERIENCES} from "../FakeBackend/Experiences";
import ExperienceCard from "../Components/ExperienceCard";


const Title = () => {
    return (
        <Text style={styles.title}>
            Descopera experiente noi in <Text style={styles.city}>Timisoara</Text>!
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
                Cautand experiente noi
            </Text>
        </View>
    );
};


const RandomExperienceButton = ({onPress}) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text
                style={styles.buttonText}
            >
                Cauta experienta!
            </Text>
        </TouchableOpacity>
    );
};


const ExperienceRandomizerScreen = () => {
    const [experience, setExperience] = useState(null);

    const onRandomExperienceButtonPress = () => {
        setExperience(null);
        setTimeout(() => {
            const experienceIndex = Math.floor(Math.random() * EXPERIENCES.length);
            setExperience(EXPERIENCES[experienceIndex]);
        }, 3000);
    };

    useEffect(onRandomExperienceButtonPress, []);

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
            <View style={styles.buttonContainer}>
                <RandomExperienceButton onPress={onRandomExperienceButtonPress}/>
            </View>
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
        justifyContent: 'center'
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


export default ExperienceRandomizerScreen;