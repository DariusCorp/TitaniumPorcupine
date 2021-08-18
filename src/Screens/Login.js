import React, {Component, useRef, useEffect} from 'react';

import {Alert, StyleSheet, Animated} from "react-native";

import {Button, Colors, Image, Text, View} from 'react-native-ui-lib';

import  {
    UIManager,
    LayoutAnimation
} from 'react-native';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

import {LogoColors, TimisoaraColors} from "../Style/colors";
import Google from "../../assets/Google__G__Logo.svg.png";
import Facebook from "../../assets/facebook.png";
import Apple from "../../assets/apple.png";
import rightArrow from "../../assets/right_arrow.png";
const labelButton = {label: 'Skip'};
const iconButton = {round: true,style: {width: 50, height: 50, marginTop: 40, marginRight: 5}, iconStyle: {tintColor: Colors.white, width: 20, height: 20}};

const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 2000,
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim,         // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
}


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            snippet: '',
            backgroundColor: Colors.yellow30,
            label: 'Button',
            // outline: true,
            buttonProps: labelButton
        };
        this.fadeAnimation = new Animated.Value(0)
    }

    changeProps = () => {
        if (this.state.buttonProps === labelButton) {
            this.setState({buttonProps: iconButton});
        }
        if (this.state.buttonProps === iconButton) {
            this.setState({buttonProps: labelButton});
        }
    };

    componentDidMount() {
        Animated.timing(this.fadeAnimation, {
            toValue: 1,
            duration: 10000,
            useNativeDriver: true,
        }).start()
    }




    render() {


        return (
            <View style={styles.container}>
            <View style={styles.upcolor}>
                <Button
                    size={'xSmall'}
                    style={{marginTop: 40, marginRight: 5, width: 90, height: 50}}
                    backgroundColor={TimisoaraColors.WindsonTan}
                    iconSource={rightArrow}
                    iconStyle={ styles.icon }
                    {...this.state.buttonProps}
                    onPress={this.changeProps}
                    animateLayout
                    animateTo={'right'}
                />
            </View>
            <FadeInView style={styles.downcolor} row width={'100%'} top>
                <Button
                    outline
                    outlineColor={Colors.black}
                    size={Button.sizes.large}
                    onPress={() => Alert.alert('Button #3')}
                    style={{marginTop: 20, marginLeft: 20, backgroundColor: "#FFF"}}
                >
                    <Image source={Google} style={styles.google}/>

                </Button>
                <Button
                    onPress={() => Alert.alert('Button #3')}
                    size={Button.sizes.large}
                    style={{marginTop: 20, backgroundColor: LogoColors.Facebook}}
                >
                    <Image source={Facebook} style={styles.facebook}/>

                </Button>
                <Button
                    size={Button.sizes.large}
                    onPress={() => Alert.alert('Button #3')}
                    style={{marginTop: 20, marginRight: 20, backgroundColor: "#000"}}
                >
                    <Image source={Apple} style={styles.apple}/>

                </Button>

            </FadeInView>
                <FadeInView style={styles.downcolor} row width={'100%'} top>

                    <Button

                        size={Button.sizes.large}
                        onPress={() => Alert.alert('Button #3')}
                        style={{marginTop: 20, marginLeft: 35, backgroundColor: TimisoaraColors.MikadoYellow, width: 120, height: 55}}
                    >
                        <Text text60>Login</Text>

                    </Button>
                    <Button
                        size={Button.sizes.large}
                        onPress={() => Alert.alert('Button #3')}
                        style={{marginTop: 20, marginRight: 35, backgroundColor: TimisoaraColors.MikadoYellow, width: 120, height: 55}}
                    >
                        <Text text60>Sign up</Text>

                    </Button>

                </FadeInView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    },
   upcolor: {
       flex: 6,
       backgroundColor: TimisoaraColors.MikadoYellow
   },
    downcolor:{
       flex: 1,
       backgroundColor: "#FFF",
       flexDirection: "row",
       justifyContent: "space-between",
        alignContent: "center"
    },
    google: {
        width: 20,
        height: 21
    },
    facebook: {
        width: 10,
        height: 21
    },
    apple: {
        width: 17,
        height: 21
    },
    icon: {
        width: 20,
        height: 20
    },
    smallbutton: {

    }

});

export default Login;