'use strict';

import React from 'react';
import {AsyncStorage, Image, StyleSheet, Text, View} from 'react-native';
import {TimisoaraColors} from "../Style/colors";
import SwipeCards from 'react-native-swipe-cards';


global.answersg = [];


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: [] = []
        }
    }

    render() {
        return (
            <View style={styles.card}>
                <Image style={styles.thumbnail} source={{uri: this.props.image}}/>
                <Text style={styles.text}>{this.props.name}</Text>
            </View>
        )
    }
}


const cards = [
    {name: 'Do you enjoy traveling?', image: 'https://media.giphy.com/media/toelXGUsYD6vtCN408/giphy.gif'},
    {name: 'Do you like sightseeing?', image: 'https://media.giphy.com/media/a4gd98yjuUK7CNFZzS/giphy.gif'},
    {name: 'You an adventurous person?', image: 'https://media.giphy.com/media/dZRCL4lz0lZKdlckNp/giphy.gif?cid=ecf05e47hq9hzuohzvnp5vv6o51gyzqiuv1zo5urx178oya7&rid=giphy.gif&ct=g'},
    {name: 'You enjoy culinary experiences?', image: 'https://media.giphy.com/media/18OIfKMbtk7vDu1Nyq/giphy.gif'},
    {name: 'Did you travel this year?', image: 'https://media.giphy.com/media/U6pedZ9GkONjU2xCHl/giphy.gif'},
    {name: 'You travel mostly with family?', image: 'https://media.giphy.com/media/Bq2SruKubwwAdUUcXE/giphy.gif'},
    {name: 'You travel mostly with friends?', image: 'https://media.giphy.com/media/SsIPF2HnLYlQnFGKsZ/source.gif'},
    {name: 'You travel mostly alone?', image: 'https://media.giphy.com/media/5bb21dSAiJVoHVy3Va/giphy.gif'},
    {name: 'Have you visited Timisoara before?', image: require("../../assets/Timisoara.gif")},
    {
        name: 'Do you plan on staying more than 3 days??',
        image: 'https://media.giphy.com/media/AErExHJVxRbkm5hPkB/giphy.gif'
    },
]


export default class Quiz extends React.Component {

    constructor(props) {
        super(props);
        this.handleYup.bind(this);
        this.state = {
            cards: cards,
            outOfCards: false,
            answers: []
        }
    }


    handleYup = () => {
        console.log("yup");
        this.setState(state => {
            const list = state.answers.push(1);

            return {
                list
            };
        });
    }

    handleNope = () => {
        console.log("nope");
        this.setState(state => {
            const list = state.answers.push(0);

            return {
                list
            };
        });

    }

    cardRemoved(index) {
        console.log(`The index is ${index}`);

        let CARD_REFRESH_LIMIT = 3

        if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
            console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

        }

        if (this.state.cards.length - index - 1 === 0) {
            //console.log(this.state.answers);
            global.answersg = this.state.answers;
            this.props.navigation.navigate("Planner");
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <SwipeCards
                    cards={this.state.cards}
                    loop={false}

                    renderCard={(cardData) => <Card {...cardData} />}
                    //renderNoMoreCards={() => <NoMoreCards />}
                    showYup={true}
                    showNope={true}

                    handleYup={this.handleYup}
                    handleNope={this.handleNope}
                    cardRemoved={this.cardRemoved.bind(this)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        borderRadius: 5,
        overflow: 'hidden',
        borderColor: 'grey',
        backgroundColor: 'white',
        borderWidth: 1,
        elevation: 1,
    },
    thumbnail: {
        width: 300,
        height: 450,
    },
    text: {
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10
    },
    noMoreCards: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: TimisoaraColors.MikadoYellow,
    }
})