import React, {Component} from 'react';
import {View} from 'react-native-ui-lib';
import NavigationBar from "../Components/NavigationBar";
import {TimisoaraColors} from "../Style/colors";
import {AsyncStorage, Image, ScrollView, Text, TouchableOpacity} from "react-native";
import {Adventure, Alone, Culinary, Family, Friends, Recommendation, Sightseeing} from "../../constants/images";


const CardTrip = ({image, onPress, title, details, renderCheck}) => {
    if(renderCheck!==0){
        return (
            <TouchableOpacity onPress={onPress}
                style={{
                    alignSelf: "center",
                    width: '90%',
                    height: 150,
                    marginVertical: 10,
                    borderRadius: 30,
                    backgroundColor: TimisoaraColors.MikadoYellow,
                    elevation: 8,
                    flexDirection: 'row'
                }}
            >
                <View style={{
                    flex: 1,
                    padding: 20,
                }}>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "bold"
                    }}
                >
                    {title}
                </Text>
                    <Text
                        style={{
                            marginTop: 8,
                            fontSize: 14,
                        }}
                    >
                        {details}
                    </Text>

                </View>
                <View
                    style={{
                        width: 114,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={image}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20
                        }}
                    />
                </View>

            </TouchableOpacity>
        )
    }else{
        return null;
    }

}


const Planner = ({navigation}) => {

        return (
            <View style={{flex: 1, backgroundColor: TimisoaraColors.White}}>
            <ScrollView style={{flex: 1, backgroundColor: TimisoaraColors.White}}>
                <CardTrip image={Recommendation}  onPress={() => {navigation.navigate("Recommendation")}} title={"Our recommendation for you"} details={"Check this recommendation that we specially made to suit your needs and desires."} renderCheck={1}/>
                <CardTrip image={Adventure} onPress={() => {navigation.navigate("Planner")}} title={"For the adventurer"} details={"Try these breathtaking experiences and adrenaline filled activities for the venturesome that you are."} renderCheck={global.answersg[2]}/>
                <CardTrip image={Sightseeing} onPress={() => {navigation.navigate("Planner")}} title={"Next Level Sightseeing"} details={"Take sightseeing to another level with the best buildings and views in the city."} renderCheck={global.answersg[1]}/>
                <CardTrip image={Culinary} onPress={() => {navigation.navigate("Planner")}} title={"Culinary masterclass"} details={"Find you inner gourmand with this magnificent culinary tour of Timisoara."} renderCheck={global.answersg[3]}/>
                <CardTrip image={Family} onPress={() => {navigation.navigate("Planner")}} title={"Family first"} details={"You and your family will love the itinerary that was planned for you."} renderCheck={global.answersg[5]}/>
                <CardTrip image={Friends} onPress={() => {navigation.navigate("Planner")}} title={"F.R.I.E.N.D.S"} details={"With nightclubs and bars open, this vacation with your friends will feel so much more special."} renderCheck={global.answersg[6]}/>
                <CardTrip image={Alone} onPress={() => {navigation.navigate("Planner")}} title={"Discover yourself"} details={"Sometimes the calm of yourself can make the experience ten times better. Try the Trip for you itinerary."} renderCheck={global.answersg[7]}/>


            </ScrollView>
                <NavigationBar/>
            </View>
        );

}

export default Planner;