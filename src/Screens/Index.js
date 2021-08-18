import _ from 'lodash';
import React, {Component} from 'react';
import {StyleSheet, ScrollView, Alert, ImageBackground, TouchableHighlight, TouchableOpacity} from 'react-native';
import {
    Constants,
    Spacings,
    View,
    Text,
    Carousel,
    Colors,
    Avatar,
    Typography, Card, ActionBar
} from 'react-native-ui-lib';
import cardImage from "../../assets/CityPass.png";
//import {AvatarHelper} from "react-native-ui-lib/generatedTypes/helpers";
import Test from "./TestScreen.js";
//import 'react-native-gesture-handler';
import home from "../../assets/home.png";
import search from "../../assets/search.png";
import stars from "../../assets/stars.png";
import tickets from "../../assets/tickets.png";
import profile from "../../assets/profile.png";



const INITIAL_PAGE = 2;
const onlineColor = Colors.green30;


const BACKGROUND_COLORS = [
    Colors.red50,
    Colors.yellow20,
    Colors.purple50,
    Colors.green50,
    Colors.cyan50,
    Colors.purple20,
    Colors.blue60,
    Colors.red10,
    Colors.green20,
    Colors.purple60
];

const avatar = [
    {image: require("../../assets/BUS.png")},
    {image: require("../../assets/compass.png")},
    {image: require("../../assets/fun.png")},
    {image: require("../../assets/Template4.png")},
];

const avatardetails = [
    {
        title: 'Bus',
        size: 50,
        source: avatar[0].image

    },
    {
        title: 'Compass',
        size: 50,
        source: avatar[1].image
    },
    {
        title: 'Fun',
        size: 50,
        source: avatar[2].image
    },
    {
        title: 'Template4',
        size: 50,
        source: avatar[3].image
    }

];




interface Props {}

interface State {
    orientation: typeof Constants.orientation;
    width: number;
    limitShownPages: boolean;
    numberOfPagesShown: number;
    currentPage: number;
    autoplay: boolean;
}

type CardsScreenProps = {};
type CardsScreenState = {
    selected1: boolean;
    selected2: boolean;
};

class Index extends Component<Props, State, CardsScreenProps, CardsScreenState> {
    carousel = React.createRef();
     url = "../../assets/avatar.jpg";
    state = {
        selected1: true,
        selected2: true
    };



    renderTextSection = () => {
        return (
            <Card.Section
                content={[
                    {text: 'City Pass Timisoara', text70: true, grey10: true},
                    {
                        text: 'Singura aplicatie integrata de ticketare',
                        text80: true,
                        grey10: true
                    },
                    {text: 'wix.to/A465c', text90: true, grey50: true}
                ]}
                style={{padding: 20, flex: 1}}
            />
        );
    };


    renderText = () => {
        return (
            <View padding-20 flex>
                <Text text70 grey10>
                    You’re Invited!
                </Text>
                <Text text80 grey10>
                    222 Join Old The Town Barbershop Official Store. Download the Wix app
                    to...
                </Text>
                <Text text90 grey50>
                    wix.to/A465c
                </Text>
            </View>
        );
    };

    renderHorizontalCard = (isImageOnLeft: boolean, borderRadius: number, useSection: boolean) => {
        return (
            <Card
                row
                height={120}
                style={{marginBottom: 15}}
                onPress={() => {}}
                borderRadius={borderRadius}
                useNative
                backgroundColor={Colors.white}
                activeOpacity={1}
                activeScale={isImageOnLeft ? 0.96 : 1.04}
            >
                {isImageOnLeft && (
                    <Card.Section
                        imageSource={cardImage}
                        imageStyle={{width: 115, height: '100%'}}
                    />
                )}
                {useSection ? this.renderTextSection() : this.renderText()}
                {!isImageOnLeft && (
                    <Card.Section
                        imageSource={cardImage}
                        imageStyle={{width: 115, height: '100%'}}
                    />
                )}
            </Card>
        );
    };


    constructor(props: Props) {
        super(props);

        this.state = {
            orientation: Constants.orientation,
            width: this.getWidth(),
            limitShownPages: false,
            numberOfPagesShown: 7,
            currentPage: INITIAL_PAGE,
            autoplay: false
        };
    }

    componentDidMount() {
        Constants.addDimensionsEventListener(this.onOrientationChange);
    }

    componentWillUnmount() {
        Constants.removeDimensionsEventListener(this.onOrientationChange);
    }

    onOrientationChange = () => {
        if (this.state.orientation !== Constants.orientation) {
            this.setState({
                orientation: Constants.orientation,
                width: this.getWidth()
            });
        }
    };

    getWidth = () => {
        return Constants.windowWidth - Spacings.s5 * 2;
    };

    onChangePage = (currentPage: number) => {
        this.setState({currentPage});
    };

    onPagePress = (index: number) => {
        if (this.carousel && this.carousel.current) {
            this.carousel.current.goToPage(index, true);
        }
    };

    onAvatarPress = (item) => {
        const {title, source, label} = item;
        const uri = _.get(source, 'uri');
        const isGravatar = !!uri && AvatarHelper.isGravatarUrl(uri);
        const patchedGravatar = isGravatar ? AvatarHelper.patchGravatarUrl(uri) : undefined;
        const message = `Label: ${label}\n\nImage-source: ${uri}\n\nIs Gravatar: ${isGravatar}\n\n${
            patchedGravatar ? `Patched-uri: ${patchedGravatar}` : ''
        }`;
        Alert.alert(title, message);
    }


    render() {
        const {limitShownPages, numberOfPagesShown, autoplay, width} = this.state;
        const BACKGROUND_IMAGES = [
            {image: require("../../assets/Page-1.jpeg"), location: "CityPass"},
            {image: require("../../assets/Page2.jpg"), location: "Planner"},
            {image: require("../../assets/Page3.jpg"), location: "Generator"},
            {image: require("../../assets/Page4.jpg"), location: "Login"},
        ];




        return (
            <View style={styles.container}>

                <ScrollView showsVerticalScrollIndicator={false}>

                <View key={0} style={styles.section}>

                    <Avatar containerStyle={{marginVertical: 45}} {...{title: 'Image, badge ("away")',
                        label: 'CCP',
                        backgroundColor: Colors.yellow60,
                        badgeProps: {size: 'pimpleBig', backgroundColor: Colors.yellow30},
                        badgePosition: 'BOTTOM_RIGHT'
                    }} onPress={() => this.onAvatarPress(avatar)}/>
                    <Text style={{...Typography.text80}}>{"  Client City Pass"}</Text>
                </View>

                <Carousel

                    key={4}
                    ref={this.carousel}
                    onChangePage={this.onChangePage}
                    pageWidth={200}
                    itemSpacings={Spacings.s3}
                    containerMarginHorizontal={Spacings.s2}
                    initialPage={INITIAL_PAGE}
                    containerStyle={{height: 300}}
                    pageControlPosition={Carousel.pageControlPositions.UNDER}
                    pageControlProps={{onPagePress: this.onPagePress, limitShownPages}}
                    // showCounter
                    allowAccessibleLayout
                >
                    {_.map([...Array(4)], (item, index) => (
                        <Page
                            key={index}
                        >
                            <ImageBackground source={BACKGROUND_IMAGES[index].image} resizeMode="cover" style={styles.image2} >
                                <TouchableHighlight onPress={() => this.props.navigation.navigate(BACKGROUND_IMAGES[index].location)} style={{flex: 1}}>
                                <View key={1} style={styles.logo}>

                                    <Avatar containerStyle={{marginVertical: 45}} {...avatardetails[index]} onPress={() => this.onAvatarPress(avatardetails[index])}/>
                                    <Text style={{
                                        color: "white",
                                        fontWeight: "bold",
                                        fontSize: 20
                                    }}>{"  " + avatardetails[index].title}</Text>
                                </View>
                                </TouchableHighlight>

                            </ImageBackground>

                        </Page>
                    ))}
                </Carousel>



                <View flex padding-20>
                    {this.renderHorizontalCard(false, 20, true)}
                    {this.renderHorizontalCard(false, 20, true)}
                    {this.renderHorizontalCard(false, 20, true)}
                    {this.renderHorizontalCard(false, 20, true)}
                </View>


            </ScrollView>
                    <ActionBar
                        centered
                        actions={_.map([home, search, stars, tickets, profile], iconSource => ({
                            iconSource,
                            iconStyle: {width: 25, height: 25}
                        }))}
                    />

            </View>
        );
    }
}

// @ts-ignore
const Page = ({children, style, ...others}) => {
    return (
        <View {...others} style={[styles.page, style]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    picker: {
        marginHorizontal: 20
    },
    page: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 8
    },
    loopCarousel: {
        position: 'absolute',
        bottom: 10,
        left: 10
    },
    section: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 10
    },
    logo:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginLeft: 2,
        position: "absolute",
        bottom: 0
    },
    image: {
        flex: 1,
        borderWidth: 3,
        borderRadius: 8,
        justifyContent: "center"
    },
    container: {
        flex: 1,
        backgroundColor: '#FFC20F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image2: {
        flex: 1,
        justifyContent: "center"
    },
});

export default Index;