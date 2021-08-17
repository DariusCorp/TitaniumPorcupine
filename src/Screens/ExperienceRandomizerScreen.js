import React from "react";
import {View, StyleSheet, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView} from "react-native";
import {TimisoaraColors} from "../Style/colors";


const RandomExperienceButton = () => {
    return (
        <TouchableOpacity
            style={{
                alignSelf: "center",
                borderWidth: 3,
                borderRadius: 10,
                borderColor: TimisoaraColors.RedPigment,
                padding: 10,
                marginTop: 50
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: TimisoaraColors.RaisinBlack
                }}
            >
                Recomanda experienta!
            </Text>
        </TouchableOpacity>
    );
};


const ExperiencePreview = () => {
  return (
      <View
        style={{
            alignSelf: "center",
            width: 300,
            height: 300,
            borderColor: TimisoaraColors.RaisinBlack,
            borderWidth: 2,
            borderRadius: 10,
            marginTop: 50
        }}
      >

      </View>
  )
};

const ExperienceRandomizerScreen = () => {
    return(
        <ScrollView style={styles.screen}>
            <StatusBar hidden={true}/>

            <Text style={styles.title}>
                Descopera experiente noi in <Text style={styles.city}>Timisoara</Text>!
            </Text>

            <ExperiencePreview/>

            <RandomExperienceButton/>

        </ScrollView>
    )
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: TimisoaraColors.MikadoYellow
    },
    title: {
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: '10%',
        marginTop: 100,
        textAlign: 'center',
        color: TimisoaraColors.DarkLiver
    },
    city: {
        fontSize: 30,
        color: TimisoaraColors.RaisinBlack
    }
});


export default ExperienceRandomizerScreen;