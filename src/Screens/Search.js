import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, Text, TextInput, Animated, TouchableOpacity} from "react-native";
import {TimisoaraColors} from "../Style/colors";
import NavigationBar from "../Components/NavigationBar";

import {Recommendations} from "../FakeBackend/Recommendations";
import {renderHeader} from "../Render/ExampleScreenPresenter";
import setData, {filter} from "lodash";
import {Button} from "react-native-ui-lib";
import {opacity} from "react-native-reanimated/src/reanimated2/Colors";


const Search = ({navigation}) => {
    const [query, setQuery] = useState('');
    const [fullData, setFullData] = useState([]);
    const [data, setData] = useState(Recommendations);
    let defaultTemp={editingIndex:-1,text:''}
    let [temp,setTemp] = useState(defaultTemp);

    useEffect(() => {
        setFullData(Recommendations);
        //console.log(fullData);
    }, []);

    const handleSearch = text => {
        const formattedQuery = text.toLowerCase();
        const filteredData = filter(fullData, recom => {
            return contains(recom, formattedQuery);
        });
        console.log(filteredData)
        setData(filteredData);
        setQuery(text);
    };

    const onPress = (state) => {
        let target = 0;
        let target_text = 0;
        let target_disp = "none";
        // console.log("state.animation")
        console.log(state.animation - 40)
        if(state.animation.__getValue() - 60 === 0){
            target = 250
            target_text=1
            target_disp= 1
            //console.log(state.disp)
        }else{
            target = 60
            target_text=0
            target_disp= 0
           // console.log(state.disp)
        }

        Animated.timing(state.animation, {
            toValue: target,
            duration: 1000,
            useNativeDriver: false
        }).start()

        Animated.timing(state.textanimation, {
            toValue: target_text,
            duration: 1000,
            useNativeDriver: false
        }).start()

        Animated.timing(state.disp, {
            toValue: target_disp,
            duration: 1000,
            useNativeDriver: false
        }).start()

    }
    const VisibleCard = ({item}) => {
        const state = {
            disp: new Animated.Value(0),
            animation: new Animated.Value(60),
            textanimation: new Animated.Value(0),
        }

        const animatedStyle = {
            height : state.animation,
            borderRadius: 5,
            margin: 5,
            marginBottom: 15,
        }
        return(
        <Animated.View style={[styles.rowFront, animatedStyle]}>
            <TouchableOpacity
                style={styles.rowFrontVisible} onPress={() => onPress(state)}
            >
                <View>
                    <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                    <Text style={styles.details} numberOfLines={1}>{item.details}</Text>
                </View>

                <Animated.Image style={{opacity: state.textanimation, height: 150, width: "100%", borderRadius: 5}} source={item.image}/>
                <Animated.View style={[{width: '100%', height: 30, flexDirection:"row-reverse"}, {opacity: state.disp}]}>
                    <TouchableOpacity onPress={() => navigation.navigate("Ticket")} style={{ alignItems: "center", justifyContent: "center", marginTop: 8, height: 30, width: 70, borderRadius: 20, backgroundColor: TimisoaraColors.MikadoYellow}}>
                    <Text>Book</Text>
                </TouchableOpacity>
                </Animated.View>

            </TouchableOpacity>
        </Animated.View>
        );
    }

    const contains = (recom, query) => {

        const {id, title} = recom;

        if (title.includes(query)) {
            //console.log(title);
            return true;
        }

        return false;
    };




    return(
    <View style={styles.container}>
        <Text style={styles.text}>Cauta atractii turistice</Text>
        <View
            style={{
                backgroundColor: '#fff',
                padding: 10,
                marginVertical: 10,
                borderRadius: 20,
                width: 350
            }}
        >
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}

            clearButtonMode="always"
            value={query}
            onChangeText={queryText => handleSearch(queryText)}
            placeholder="Search"
            style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />
        </View>
        <FlatList
            //ListHeaderComponent={renderHeader}
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <VisibleCard item={item}/>

            )}
        />
      <NavigationBar navigation={navigation}/>
    </View>
)
}
export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: TimisoaraColors.White,
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: '#101010',
        marginTop: 10,
        marginBottom: 30,
        fontWeight: '700'
    },
    rowFront: {
        backgroundColor: '#FFF',
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    rowFrontVisible: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        flex: 1,
        padding: 10,
        marginBottom: 15,
    },
    listItem: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10,

        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: TimisoaraColors.MikadoYellow,
        width: 350
    },
    listItemText: {
        fontSize: 18,
        textAlign: "center"
    }
});