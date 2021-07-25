import AppLoading from 'expo-app-loading';
import * as React from 'react';
import {Text, TouchableOpacity, Image, View, TextInput, Alert, StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Font from 'expo-font';

let custom_font = {'customfont':require('../assets/customFont/WhaleITriedRegular.ttf')}

export default class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            fontLoaded: false,
            username: '',
            password: '',
        };
    }

    async loadFonts(){
        await Font.loadAsync(custom_font);
        this.setState({fontLoaded: true});
    }
    
    componentDidMount(){
        this.loadFonts();
    }

    checkuser = async()=>{
        let username = this.state.username;
        let password = this.state.password;
    }

    render(){
        if(! this.state.fontLoaded){
            return <AppLoading />
        }
        else{
            return(
                <View style = {styles.container}>
                    <Text style = {styles.appTitleText}>App Name</Text>
                    <View style = {styles.inputContainer}>
                        <Text style = {styles.inputText}>
                            Username: 
                        </Text>
                        <TextInput style = {styles.textInputStyle} placeholder = 'Username' onChangeText = {(text)=>{this.setState({username: text})}}></TextInput>
                    </View>
                    <View style = {styles.inputContainer}>
                        <Text style = {styles.inputText}>
                            Password: 
                        </Text>
                        <TextInput style = {styles.textInputStyle} placeholder = 'Password' maxLength = {10} secureTextEntry = {true} onChangeText = {(text)=>{this.setState({password: text})}}></TextInput>
                    </View>
                    <View>
                        <TouchableOpacity style = {styles.submitButton} onPress = {()=>this.props.navigation.navigate('Dashboard')}>
                            <Text style = {styles.inputText}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.inputContainer}>
                        <Text style = {styles.inputText}>New User?</Text>
                        <TouchableOpacity style = {styles.signUp} onPress = {()=>this.props.navigation.navigate("FormScreen")} ><Text style = {styles.inputText}>SignUp</Text></TouchableOpacity>
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        alignItems:"center",
        justifyContent:"center",
    },
    signUp: {},
    inputContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        flex: 0.07,
        flexDirection: 'row',
        justifyContent: "center",
    },
    textInputStyle:{
        flex: 0.3,
        backgroundColor: 'white',
        marginLeft: 20,
        alignSelf:"center",
        width: RFValue(100),
        height: RFValue(25),
        borderRadius: 25,
    },
    appTitleText: {
        fontSize: RFValue(30),
        fontFamily: 'customfont'
    },
    inputText: {
        fontSize: RFValue(25),
        fontFamily: 'customfont'
    },
    submitButton:{
        backgroundColor: 'white'
    },
    inputContainer:{

    }
});