
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import NavigationBar from "../Components/NavigationBar";

import { images, icons, COLORS, SIZES } from '../../constants';

const StarReview = ({ rate }) => {
    let starComponents = [];
    let fullStar = Math.floor(rate)
    let noStar = Math.floor(5 - rate)
    let halfStar = 5 - fullStar - noStar

    // Full Star
    for (let i = 0; i < fullStar; i++) {
        starComponents.push(
            <Image
                key={`full-${i}`}
                source={icons.starFull}
                resizeMode="cover"
                style={{
                    width: 20,
                    height: 20,
                }}
            />
        )
    }

    // Half Star
    for (let i = 0; i < halfStar; i++) {
        starComponents.push(
            <Image
                key={`half-${i}`}
                source={icons.starHalf}
                resizeMode="cover"
                style={{
                    width: 20,
                    height: 20,
                }}
            />
        )
    }

    // No Star
    for (let i = 0; i < noStar; i++) {
        starComponents.push(
            <Image
                key={`empty-${i}`}
                source={icons.starEmpty}
                resizeMode="cover"
                style={{
                    width: 20,
                    height: 20,
                }}
            />
        )
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {starComponents}
            <Text style={{ marginLeft: SIZES.base, color: COLORS.gray }}>{rate}</Text>
        </View>
    )
}

const IconLabel = ({ icon, label }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={icon}
                resizeMode="cover"
                style={{
                    width: 50,
                    height: 50,
                }}
            />
            <Text style={{ marginTop: SIZES.padding, color: COLORS.gray}}>{label}</Text>
        </View>
    )
}

const DestinationDetail = ({ navigation }) => {

    // Render

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={{ flex: 2 }}>
                <Image
                    source={images.transport}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '80%',
                    }}
                />
                <View
                    style={[{
                        position: 'absolute',
                        bottom: "5%",
                        left: "5%",
                        right: "5%",
                        borderRadius: 15,
                        padding: SIZES.padding,
                        backgroundColor: COLORS.white
                    }, styles.shadow]}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.shadow}>
                            <Image
                                source={images.skiVilla}
                                resizeMode="cover"
                                style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 15,
                                }}
                            />
                        </View>

                        <View style={{ marginHorizontal: SIZES.radius, justifyContent: 'space-around' }}>
                            <Text >Transportation ticket</Text>
                            <Text style={{ color: COLORS.gray }}>STPT</Text>

                            <StarReview
                                rate={4.5}
                            />
                        </View>
                    </View>

                    <View style={{ marginTop: SIZES.radius }}>
                        <Text style={{ color: COLORS.gray }}>
                            Buy a transportation ticket that you can use for any line.
                        </Text>
                    </View>
                </View>

                {/* Header Buttons */}
                <View
                    style={{
                        position: 'absolute',
                        top: 50,
                        left: 20,
                        right: 20,
                        //height: 50,
                        flexDirection: 'row',
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('Home') }}
                        >
                            <Image
                                source={icons.back}
                                resizeMode="cover"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => { console.log("Menu on pressed") }}
                        >
                            <Image
                                source={icons.menu}
                                resizeMode="cover"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Body */}
            <View style={{ flex: 1.5 }}>
                {/* Icons */}
                <View style={{ flexDirection: 'row', marginTop: SIZES.base, paddingHorizontal: SIZES.padding * 2, justifyContent: 'space-between' }}>
                    <IconLabel
                        icon={icons.user}
                        label="1 person"
                    />

                    <IconLabel
                        icon={icons.train}
                        label="Any mean of transport"
                    />

                    <IconLabel
                        icon={icons.air}
                        label="AC"
                    />
                </View>

                {/* About */}
                <View style={{ marginTop: SIZES.padding, paddingHorizontal: SIZES.padding }}>
                    <Text >About</Text>
                    <Text style={{ marginTop: SIZES.radius, color: COLORS.gray}}>
                        1865: Work begins on the tram line.
                        At the beginning of 1868, the Timisoara Railway Tram Company was inaugurated, which became the Timișoara Transport Company;
                    </Text>
                </View>
            </View>

            {/* Footer */}
            <View style={{ flex: 0.5, paddingHorizontal: SIZES.padding }}>
                <LinearGradient
                    style={[{ height: 70, width: '100%', borderRadius: 15 }]}
                    colors={['#fff2f2', '#fff0f0']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, marginHorizontal: SIZES.padding, justifyContent: 'center' }}>
                            <Text  >7 lei</Text>
                        </View>

                        <TouchableOpacity
                            style={{ width: 130, height: '80%', marginHorizontal: SIZES.radius }}
                            onPress={() => {  navigation.navigate("Ticket")}}
                        >
                            <LinearGradient
                                style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }]}
                                colors={['#ffc20f', '#ffc20f']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <Text style={{ color: COLORS.white }}>BOOKING</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
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

export default DestinationDetail;
