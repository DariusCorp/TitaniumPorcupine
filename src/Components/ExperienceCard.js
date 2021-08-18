import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {TimisoaraColors} from "../Style/colors";
import React, {useState} from "react";
import CardFlip from "react-native-card-flip";

const ExperienceCardFront = ({experience, onPress}) => {
    return (
        <TouchableOpacity
            style={[styles.card, styles.cardFront]}
            onPress={onPress}
            activeOpacity={1}
        >
            <Image
                source={{uri: experience.image}}
                resizeMode={'cover'}
                style={styles.image}
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


const ExperienceCardBack = ({experience, onPress}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.card, styles.cardBack]}
            activeOpacity={1}
        >

        </TouchableOpacity>
    )
};


const ExperienceCard = ({experience}) => {
    const [cardRef, setCardRef] = useState();
    return (
        <CardFlip
            style={styles.cardContainer}
            ref={setCardRef}
            flipDirection={'y'}
            flipZoom={0}
            duration={500}
        >
            <ExperienceCardFront
                experience={experience}
                onPress={() => cardRef.flip()}
            />
            <ExperienceCardBack
                experience={experience}
                onPress={() => cardRef.flip()}
            />
        </CardFlip>
    )
};


const styles = StyleSheet.create({
    cardContainer: {
        width: '90%',
        alignSelf: 'center',
        height: '100%',
        alignItems: 'center'
    },
    card: {
        height: '100%',
        width: '100%',
        borderRadius: 30,
        elevation: 6,
        backgroundColor: TimisoaraColors.White,
        justifyContent: 'center'
    },
    cardFront: {},
    cardBack: {
        backgroundColor: TimisoaraColors.MikadoYellow,
    },
    image: {
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
})

export default ExperienceCard;
