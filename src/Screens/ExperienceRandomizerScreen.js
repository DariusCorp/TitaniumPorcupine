import React, {useEffect, useState} from "react";
import {ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {TimisoaraColors} from "../Style/colors";
import {EXPERIENCES} from "../FakeBackend/Experiences";


const Title = () => {
    return (
        <Text style={styles.title}>
            Descopera experiente noi in <Text style={styles.city}>Timisoara</Text>!
        </Text>
    )
};


const ExperiencePreview = ({experience}) => {
    if (experience === null)
        return (
            <View style={styles.experiencePreview}>
                <ActivityIndicator color={TimisoaraColors.MikadoYellow} size={100}/>
                <Text style={styles.activityIndicatorText}>
                    Cautand experiente noi
                </Text>
            </View>
        )
    return (
        <TouchableOpacity
            style={styles.experiencePreview}
        >
            <Image
                source={{uri: experience.image}}
                resizeMode={'cover'}
                style={styles.experienceImage}
            />
            <View style={styles.experienceInfo}>
                <View style={styles.experienceTitle}>
                    <Text style={styles.experienceTitleText}>
                        {
                            experience.title
                        }
                    </Text>
                </View>
                <View style={styles.experiencePrice}>
                    <Text style={styles.experiencePriceText}>
                        {
                            experience.price
                        }
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
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
                Recomanda experienta!
            </Text>
        </TouchableOpacity>
    );
};


const ExperienceRandomizerScreen = () => {
    const [experience, setExperience] = useState(null);

    const onRandomExperienceButtonPress = () => {
        if(experience === null)
            return;
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
                <ExperiencePreview experience={experience}/>

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
        alignItems: 'center'
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

    activityIndicatorText: {
        color: TimisoaraColors.MikadoYellow,
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        padding: 10
    },
    experiencePreview: {
        width: '90%',
        height: '100%',
        borderColor: TimisoaraColors.RaisinBlack,
        borderRadius: 20,
        justifyContent: 'center'
    },
    experienceImage: {
        flex: 3,
        justifyContent: "center",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    experienceInfo: {
        flex: 1,
        backgroundColor: TimisoaraColors.MikadoYellow,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    experienceTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    experienceTitleText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    experiencePrice: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    experiencePriceText: {
        fontSize: 18
    },

    button: {
        borderRadius: 50,
        backgroundColor: TimisoaraColors.MikadoYellow,
        paddingVertical: 10,
        paddingHorizontal: 24
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: TimisoaraColors.RaisinBlack
    },
});


export default ExperienceRandomizerScreen;