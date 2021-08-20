import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import NavigationBar from "../Components/NavigationBar";
import {Button} from "react-native-ui-lib";
import {TimisoaraColors} from "../Style/colors";
import {Icon} from 'react-native-elements';
import {avatar} from "../../constants/images";
import editIcon from "../../assets/editIcon.png"
import Colors from "react-native/Libraries/NewAppScreen/components/Colors";
import profileIcon from "../../assets/profile.png";
import starIcon from "../../assets/stars.png";
import cardIcon from "../../assets/cardIcon.png";
import settingIcon from "../../assets/settingIcon.png";
import orderIcon from "../../assets/orderIcon.png";
import voucherIcon from "../../assets/voucherIcon.png";



const ButtonProfile = ({title, image, onPress}) => {

    return (
        <Button onPress={onPress}
            text90
            link
                linkColor={TimisoaraColors.DarkLiver}
            style={{marginBottom: 20}}
            iconSource={image}
                iconStyle={{width: 30, height: 30}}
            label={title}

        />
    );
}

const Profile = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                }}
            >
                <View style={styles.topView}>
                    <Button
                        round
                        backgroundColor= '#AB4900'
                        style={{marginHorizontal: 330, marginVertical: 20}}
                        iconSource={editIcon}
                        iconStyle={{tintColor: Colors.white, width: 30, height: 30}}
                        size={Button.sizes.xSmall}
                    />

                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            marginTop: 130,
                            marginHorizontal: 140,
                            width: 100,
                            height: 100,
                            borderRadius: 100 / 2,
                            backgroundColor: 'white',
                            zIndex: 2,
                            shadowColor: '#000',
                            shadowOffset: {width: 0, height: 0},
                            shadowOpacity: 0.2,
                            shadowRadius: 10,
                            elevation: 7,

                        }}
                    >
                        <Image style={{
                            height: 90,
                            width: 90,
                            borderRadius: 45,
                        }} resizeMode={'cover'} source={avatar}/>

                    </View>
                    <Text style={{fontSize: 16, fontWeight: "bold", marginHorizontal: 133, marginVertical: 160}}>Mircea Popescu</Text>


                </View>

            </View>
            <View style={{flex: 1, alignItems: "flex-start", marginHorizontal: 30}}>
                <ButtonProfile title={"Profile Details"} image={profileIcon} onPress={() => navigation.navigate("Login")}/>
                <ButtonProfile title={"Istoric comenzi bilete"} image={orderIcon} onPress={() => navigation.navigate("Login")}/>
                <ButtonProfile title={"My Vouchers/Gift Cards"} image={voucherIcon} onPress={() => navigation.navigate("Login")}/>
                <ButtonProfile title={"Cardurile mele"} image={cardIcon} onPress={() => navigation.navigate("Login")}/>
                <ButtonProfile title={"Review-urile mele"} image={starIcon} onPress={() => navigation.navigate("Login")}/>
                <ButtonProfile title={"Settings"} image={settingIcon} onPress={() => navigation.navigate("Login")}/>
            </View>

            <NavigationBar/>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: TimisoaraColors.White
    },
    topView: {
        flex: 0.55,
        backgroundColor: TimisoaraColors.MikadoYellow,
        //alignItems: 'center'
    },

});

export default Profile;

