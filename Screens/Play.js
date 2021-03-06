import AppLoading from 'expo-app-loading';
import * as React from 'react';
import {Text, TouchableOpacity, KeyboardAvoidingView, Image, View,Platform,Dimensions, StatusBar, TextInput, Alert, StyleSheet, ScrollView, FlatList} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import db from '../Config';

let custom_font = {'customfont':require('../assets/customFont/WhaleITriedRegular.ttf')}

export default class Logout extends React.Component{
    constructor(){
        super();
        this.state = {fontLoaded: false};
    }

    async loadFonts(){
        await Font.loadAsync(custom_font);
        this.setState({fontLoaded: true});
    }

    componentDidMount(){
        this.loadFonts();
    }

    render(){
        if(! this.state.fontLoaded){
            return <AppLoading />
        }else{
            let operation = this.props.route.params.operation;
            console.log(operation);
// 🍎🍏🍊🍋🍒🍇🍉🍓🍑🍈🍌🍐🍍🍠🍆🍅🌽
            let questions = ['🍒 + 🍒', '🍎🍎🍎🍎🍎 + 🍎🍎🍎🍎🍎','🍉🍉🍉🍉 + 🍉🍉🍉🍉', '🍌🍌🍌 + 🍌🍌🍌'];
            let answers = ['4', '10', '8', '3'];
            let min = 0;
            let max = 3;
            let ques = Math.round(min + (Math.random() * (max-min)));
            let question = questions[ques];
            console.log(answers[ques]);
            
            return(
                <View style = {styles.container}>
                    <View style = {styles.topcontainer}>
                        <SafeAreaView style = {styles.safeview}/>
                        <Text style = {styles.appTitleText}>App Name</Text>
                        <Text style = {styles.title}>Let the Game Begin!!</Text>
                    </View>
                    <View style = {styles.questions}>
                        <Text style = {styles.quesHeading}>Question: </Text>
                        <Text style = {styles.questionText}>{question}</Text>
                    </View>
                    <View style = {styles.optionContainer}>
                        <TouchableOpacity style = {styles.option}><Text style = {{fontSize: RFValue(40), fontFamily: 'customfont'}}>{answers[0]}</Text></TouchableOpacity>
                        <TouchableOpacity style = {styles.option}><Text style = {{fontSize: RFValue(40), fontFamily: 'customfont'}}>{answers[1]}</Text></TouchableOpacity>
                        <TouchableOpacity style = {styles.option}><Text style = {{fontSize: RFValue(40), fontFamily: 'customfont'}}>{answers[2]}</Text></TouchableOpacity>
                        <TouchableOpacity style = {styles.option}><Text style = {{fontSize: RFValue(40), fontFamily: 'customfont'}}>{answers[3]}</Text></TouchableOpacity>
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#a7ff4a',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    topcontainer: {
        width: '100%',
        height: '20%',
        backgroundColor: '#b32e37',
        justifyContent: "center",
        alignItems:"center",
    },
    safeview: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitleText: {
        marginTop: -50,
        fontSize: RFValue(30),
        fontFamily: 'customfont'
    },
    title: {
        marginTop: 15,
        fontSize: RFValue(25),
        fontFamily: 'customfont',
    },
    quesHeading: {
        fontFamily: 'customfont',
        fontSize: RFValue(70),
    },
    questions: {
        width: '100%',
        alignItems: 'center'
    },
    questionText: {
        fontSize: RFValue(30),
        fontFamily: 'customfont'
    },
    optionContainer: {
        marginTop: 10,
        alignItems: 'center',
        width: '100%',
    },
    option: {
        marginTop: 10,
        width: '90%',
        height: RFValue(60),
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
    }
});