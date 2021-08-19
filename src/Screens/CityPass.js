
import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { images, icons, COLORS,  SIZES } from '../../constants'
import _ from "lodash";
import home from "../../assets/home.png";
import search from "../../assets/search.png";
import stars from "../../assets/stars.png";
import tickets from "../../assets/tickets.png";
import profile from "../../assets/profile.png";
import {ActionBar} from "react-native-ui-lib";
import {ScrollView} from "react-native";
import NavigationBar from "../Components/NavigationBar";

const OptionItem = ({ bgColor, icon, label, onPress }) => {
    return (
        <TouchableOpacity
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onPress={onPress}
        >
            <View style={[styles.shadow, { width: 60, height: 60 }]}>
                <LinearGradient
                    style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 15, backgroundColor: 'red' }]}
                    colors={bgColor}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <Image
                        source={icon}
                        resizeMode="cover"
                        style={{
                            tintColor: COLORS.white,
                            width: 30,
                            height: 30,
                        }}
                    />
                </LinearGradient>
            </View>
            <Text style={{ marginTop: SIZES.base, color: COLORS.gray }}>{label}</Text>
        </TouchableOpacity>
    )
}

const Home = ({ navigation }) => {

    // Dummy Data
    const [destinations, setDestinations] = React.useState([
        {
            id: 0,
            name: "Transport",
            img: images.transport,
        },
        {
            id: 1,
            name: "1 Day Pass",
            img: images.day,

        },
        {
            id: 2,
            name: "Muzeul de Arta",
            img: images.muzeu,
        },
        {
            id: 3,
            name: "Muzeul satului",
            img: images.sat,
        },
    ]);

    // Render

    function renderDestinations(item, index) {
        let destinationStyle = {};

        if (index === 0) {
            destinationStyle = { marginLeft: SIZES.padding, }
        }

        return (
            <TouchableOpacity
                style={{ justifyContent: 'center', marginHorizontal: SIZES.base, ...destinationStyle }}
                onPress={() => { navigation.navigate("DestinationDetail") }}
            >
                <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                        width: SIZES.width * 0.28,
                        height: '82%',
                        borderRadius: 15
                    }}
                />

                <Text style={{ marginTop: SIZES.base / 2 }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            {/* Banner */}
            <View style={{ flex: 1, marginTop: SIZES.base, paddingHorizontal: SIZES.padding, }}>
                <Image
                    source={images.homeBanner}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 15,
                    }}
                />
            </View>

            {/* Options */}
            <View style={{ flex: 0.5}}>
                <View style={{ flexDirection: 'row', marginTop: SIZES.padding, paddingHorizontal: SIZES.base }}>
                    <OptionItem
                        icon={icons.event}
                        bgColor={['#514f59', '#514f59']}
                        label="Event"
                        onPress={() => { console.log("Flight") }}
                    />
                    <OptionItem
                        icon={icons.train}
                        bgColor={['#f20018', '#f20018']}
                        label="Train"
                        onPress={() => { console.log("Train") }}
                    />
                    <OptionItem
                        icon={icons.bus}
                        bgColor={['#FFc20f', '#FFc20f']}
                        label="Bus"
                        onPress={() => { console.log("Bus") }}
                    />
                    <OptionItem
                        icon={icons.taxi}
                        bgColor={['#211c21', '#211c21']}
                        label="Taxi"
                        onPress={() => { console.log("Taxi") }}
                    />
                </View>


            </View>

            {/* Destination */}
                <View style={{ flex: 1, marginBottom: 50 }}>
                <Text style={{ marginTop: SIZES.base, marginHorizontal: SIZES.padding }}>Destination</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={destinations}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderDestinations(item, index)}
                />
            </View>
            <NavigationBar/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});

export default Home;
