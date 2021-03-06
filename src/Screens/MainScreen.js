import React, {useEffect, useState} from "react";
import {Image, ImageBackground, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View, Animated} from "react-native";
import {TimisoaraColors} from "../Style/colors";
import {Avatar, Colors} from "react-native-ui-lib";
import home from '../../assets/home.png';
import search from '../../assets/search.png';
import tickets from '../../assets/tickets.png';
import images from "../../constants/images";
import NavigationBar from "../Components/NavigationBar";



const Card = ({title, image, target, onPress, naviagtion, onPress2}) => {

    return (
        <TouchableOpacity onPress={onPress}
                          style={{
                              marginHorizontal: 10,
                              marginVertical: 8,
                              height: 250,
                              width: 175,
                              borderRadius: 20,
                              elevation: 6,
                          }}
        >
            <Image
                source={image}
                resizeMode={'cover'}
                style={{
                    width: '100%',
                    height: 200,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }}
            />
            <View
                style={{
                    height: 50,
                    backgroundColor: TimisoaraColors.MikadoYellow,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <Image
                    source={require('../../assets/AGATRON.png')}
                    style={{
                        borderRadius: 100,
                        height: 36,
                        width: 36,
                        marginHorizontal: 8
                    }}
                />
                <Text
                    style={{
                        fontSize: 16,
                        marginHorizontal: 10
                    }}
                >
                    {
                        title
                    }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const onPress = (state) => {
    let shower = 120;
    if(state.shower.__getValue() - 120 === 0){
        shower = 250

    }else{
        shower = 120

    }

    Animated.timing(state.shower, {
        toValue: shower,
        duration: 1000,
        useNativeDriver: false
    }).start()


}



const Card2 = ({image, text}) => {
    const state= {
        shower: new Animated.Value(120)
    }
    return (
        <Animated.View
            style={{
                alignSelf: "center",
                width: '90%',
                height: state.shower,
                marginVertical: 10,
                borderRadius: 30,
                backgroundColor: TimisoaraColors.MikadoYellow,
                elevation: 8,

            } }
        >
            <TouchableOpacity style={{flex: 1,  flexDirection: 'row'}} onPress={() => onPress(state)}>
            <Text
                style={{
                    flex: 1,
                    padding: 20
                }}
            >
                {text}
            </Text>
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

        </Animated.View>
    )
}




const MainScreen = ({navigation}) => {

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('Refreshed!');

        });
        return unsubscribe;
    }, [navigation]);

    return (
        <View
            style={{
                flex: 1
            }}
        >
            <ScrollView
                style={{
                    backgroundColor: TimisoaraColors.White,
                    flex: 1
                }}
            >
                <SafeAreaView
                    style={{
                        flexDirection: 'row',
                        alignItems: "center"
                    }}
                >
                    <Avatar containerStyle={{marginVertical: Platform.OS === 'android' ?  40: 0, marginHorizontal: 15}} {...{
                        title: 'Image, badge ("away")',
                        source: {
                            uri:
                                'https://lh3.googleusercontent.com/-CMM0GmT5tiI/AAAAAAAAAAI/AAAAAAAAAAA/-o9gKbC6FVo/s181-c/111308920004613908895.jpg'
                        },
                        badgeProps: {size: 'pimpleBig', backgroundColor: Colors.yellow30},
                        badgePosition: 'BOTTOM_RIGHT'
                    }} onPress={() => {navigation.navigate("Profile")}}/>
                    <Text
                        style={{
                            fontSize: 22,
                            fontWeight: 'bold'
                        }}
                    >
                        Mircea Popescu
                    </Text>
                </SafeAreaView>

                <ScrollView
                    horizontal={true}
                    style={{
                        flex: 1,
                        marginHorizontal: 12
                    }}
                    contentContainerStyle={{
                    }}
                    showsHorizontalScrollIndicator={false}
                >
                    <Card title={'City Pass'} image={images.homeBanner }  onPress={() => {navigation.navigate("CityPass")}} naviagtion={navigation}/>
                    <Card title={'Trip Planner'} image={images.muzeu}  onPress={() => {navigation.navigate(global.completed ? "Planner" : "TakeQuiz")}} naviagtion={navigation} onPress2={() => {navigation.navigate("Planner")}}/>

                    <Card title={'Experiences'} image={images.sat}  onPress={() => {navigation.navigate("Generator")}} naviagtion={navigation}/>
                    {/*<Card title={'Flight Festival'} image={images.transport}  onPress={() => {navigation.navigate("Tickets")}}/>
                    <Card title={'Timisoara'} image={images.timisoara}  onPress={() => {navigation.navigate("Quiz")}}/>*/}
                </ScrollView>

                <ScrollView
                    style={{
                    }}
                >
                    <Card2 image={images.day} text={"Get your one day pass in-app in order to get all of the perks that our great city has to offer you. First 100 passes are 20% OFF! Do not miss out on this ooportunity and come visit our marvelous city"}/>
                    <Card2 image={images.nfc} text={"Prima aplicatie integrata care include posibilitatea sa uiti de biletele de transport traditionale. Cumpara biletul electronic prin intermediul aplicatiei"}/>
                    <Card2 image={images.sat} text={"Muzeul Satului B??n????ean din Timi??oara este singurul muzeu cu profil etnografic din Rom??nia care cuprinde centrul civic al satului."}/>
                    <Card2 image={images.flight} text={"Vacan??a ta de vara aceasta poart?? numele Flight Festival ??i se ??nt??mpl?? la Aerodromul Cioca din Timi??oara."}/>
                    <Card2 image={images.buzias} text={"Pe langa oras poti descorperi atractii minunate pentru a iti petrece timpul. We'll give you a hint: Parcul Buzias, Charlottenburg "}/>


                </ScrollView>
            </ScrollView>
            <NavigationBar navigation={navigation}/>
        </View>
    );
};


export default MainScreen;