import React, {useState} from "react";
import {TouchableHighlight, TouchableOpacity, View, StyleSheet, Text, Animated, Button} from "react-native";
import {Recommendations} from "../FakeBackend/Recommendations";
import {SwipeListView} from 'react-native-swipe-list-view';
import {TimisoaraColors} from "../Style/colors";


const Recommendation = ({navigation}) => {
    const [listData, setListData] = useState(
        Recommendations.map((RecommendationsItem, index) => ({
            key: `${index}`,
            title: RecommendationsItem.title,
            timeTable: RecommendationsItem.timeTable,
            details: RecommendationsItem.details,
            image: RecommendationsItem.image
        }))
    );

    const closeRow = (rowMap, rowKey) => {
        if(rowMap[rowKey]){
            rowMap[rowKey].closeRow();
        }
    }

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    }


    const onPress = (state) => {
        let target = 0;
        let target_text = 0;
        // console.log("state.animation")
        console.log(state.animation - 40)
        if(state.animation.__getValue() - 60 === 0){
            target = 250
            target_text=1

            console.log(target + " 1")
        }else{
            target = 60
            target_text=0
            console.log(target + " 2")
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
    }


    const VisibleItem = props => {

        const state = {
            animation: new Animated.Value(60),
            textanimation: new Animated.Value(0),
        }

        const animatedStyle = {
            height : state.animation,
            borderRadius: 5,
            margin: 5,
            marginBottom: 15,
        }
        const {data} = props;
        return(
            <Animated.View style={[styles.rowFront, animatedStyle]}>
            <TouchableOpacity
            style={styles.rowFrontVisible} onPress={() => onPress(state)}
            >
                <View>
                    <Text style={styles.title} numberOfLines={1}>{data.item.title}</Text>
                    <Text style={styles.details} numberOfLines={1}>{data.item.details}</Text>
                   </View>
                <Animated.Text style={[styles.details,{opacity: state.textanimation, fontWeight: "bold", fontSize: 15, marginTop: 15}]} numberOfLines={1}> Orar:  {data.item.timeTable}</Animated.Text>

                <Animated.Image style={{opacity: state.textanimation, height: 150, width: "100%", borderRadius: 5}} source={data.item.image}/>

            </TouchableOpacity>
            </Animated.View>
        );
    }

    const renderItem = (data, rowMap) => {
        return <VisibleItem data={data}/>
    }

    const HiddenItemActions = props => {
        const {onClose, onDelete} = props;

        return(
            <View style={styles.rowBack}>
                <TouchableOpacity onPress={() => navigation.navigate("Ticket")}>
                    <Text>Booking</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnLeft]} onPress={onClose}>
                    <Text>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={onDelete}>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>

        );
    }

    const renderHiddenItem = (data, rowMap) => {
        return (
          <HiddenItemActions
              data={data}
            rowMap={rowMap}
            onClose={() => closeRow(rowMap, data.item.key)}
            onDelete={() => deleteRow(rowMap, data.item.key)}
        />
        );
    }


    return (

        <View style={styles.container}>
            <SwipeListView
                data={listData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-150}
            />

        </View>

    );
}
export default Recommendation;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f4f4',
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
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
    rowBack: {
        alignItems: 'center',
        backgroundColor: TimisoaraColors.MikadoYellow,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        margin: 5,
        marginBottom: 15,
        borderRadius: 5,
    },
    backRightBtn: {
        alignItems: 'flex-end',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        paddingRight: 17,
    },
    backRightBtnLeft: {
        backgroundColor: '#1f65ff',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    trash: {
        height: 25,
        width: 25,
        marginRight: 7,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#666',
    },
    details: {
        fontSize: 12,
        color: '#999',
    },
});