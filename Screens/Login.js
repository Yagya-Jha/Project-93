import AppLoading from 'expo-app-loading';
import * as React from 'react';
import {Text, TouchableOpacity, Image, View, TextInput, Alert, StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Font from 'expo-font';
import firebase from 'firebase';

let custom_font = {'customfont':require('../assets/customFont/WhaleITriedRegular.ttf')}

export default class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            fontLoaded: false,
            emailID: '',
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

    userSignup = (email, password)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password).then((resopnse)=>{ this.props.navigation.navigate('FormScreen') }).catch(function (error){
            return(Alert.alert(error.message))
        })
    }

    userSignIn(email, password){
        firebase.auth().signInWithEmailAndPassword(email, password).then((resopnse)=>{ this.props.navigation.navigate('Dashboard') }).catch(function (error){
            return(Alert.alert(error.message))
        })
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
                            emailID: 
                        </Text>
                        <TextInput style = {styles.textInputStyle} placeholder = 'emailID' keyboardType = {'email-address'} onChangeText = {(text)=>{this.setState({emailID: text})}}></TextInput>
                    </View>
                    <View style = {styles.inputContainer}>
                        <Text style = {styles.inputText}>
                            Password: 
                        </Text>
                        <TextInput style = {styles.textInputStyle} placeholder = 'Password' maxLength = {10} secureTextEntry = {true} onChangeText = {(text)=>{this.setState({password: text})}}></TextInput>
                    </View>
                    <View>
                        <TouchableOpacity style = {styles.submitButton} onPress = {()=>this.userSignIn(this.state.emailID, this.state.password)}>
                            <Text style = {styles.inputText}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.inputContainer}>
                        <Text style = {styles.inputText}>New User?</Text>
                        <TouchableOpacity style = {styles.signUp} onPress = {()=>this.userSignup(this.state.emailID, this.state.password)} ><Text style = {styles.inputText}>SignUp</Text></TouchableOpacity>
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
    signUp: {
        backgroundColor: 'white',

    },
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
