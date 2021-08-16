import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {ActionBar, AnimatedScanner, Colors, ChipsInput, Card} from "react-native-ui-lib";
import icon from '../TitaniumPorcupine/assets/icon.png'
import CardsScreen from "./src/Screens/TestScreen";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Hello, Timisoara!</Text>
            <Text>OK</Text>

            <CardsScreen/>

            <ActionBar
                centered
                actions={[
                    {label: 'Hide', onPress: () => Alert.alert('hide'), white: true},
                    {label: 'Add Discount', onPress: () => Alert.alert('add discount'), white: true},
                    {label: 'Duplicate', onPress: () => Alert.alert('duplicate'), white: true}
                ]}
                backgroundColor='orange'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
