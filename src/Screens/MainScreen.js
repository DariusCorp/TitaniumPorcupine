import React from "react";
import {Image, ImageBackground, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {TimisoaraColors} from "../Style/colors";
import {Avatar, Colors} from "react-native-ui-lib";
import home from '../../assets/home.png';
import search from '../../assets/search.png';
import tickets from '../../assets/tickets.png';
import images from "../../constants/images";
import NavigationBar from "../Components/NavigationBar";



const Card = ({title, image, target, onPress}) => {
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


const Card2 = ({image}) => {
    return (
        <View
            style={{
                alignSelf: "center",
                width: '90%',
                height: 120,
                marginVertical: 10,
                borderRadius: 30,
                backgroundColor: TimisoaraColors.MikadoYellow,
                elevation: 8,
                flexDirection: 'row'
            }}
        >
            <Text
                style={{
                    flex: 1,
                    padding: 20
                }}
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
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

        </View>
    )
}




const MainScreen = ({navigation}) => {

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
                        Mircea Hava
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
                    <Card title={'City Pass'} image={images.homeBanner} onPress={() => {navigation.navigate("CityPass")}}/>
                    <Card title={'Trip Planner'} image={images.muzeu}  onPress={() => {navigation.navigate("TakeQuiz")}}/>
                    <Card title={'Experiences'} image={images.sat}  onPress={() => {navigation.navigate("Generator")}}/>
                    <Card title={'Flight Festival'} image={images.transport}  onPress={() => {navigation.navigate("Login")}}/>
                    <Card title={'Timisoara'} image={images.timisoara}  onPress={() => {navigation.navigate("Quiz")}}/>
                </ScrollView>

                <ScrollView
                    style={{
                    }}
                >
                    <Card2 image={images.day}/>
                    <Card2 image={images.sat}/>
                    <Card2 image={images.homeBanner}/>
                    <Card2 image={images.transport}/>
                    <Card2 image={images.timisoara}/>

                </ScrollView>
            </ScrollView>
            <NavigationBar/>
        </View>
    );
};


export default MainScreen;