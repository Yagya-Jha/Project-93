import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HelpingHand from '../Screens/HelpingHand';
import LevelSelect from '../Screens/LevelSelect';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends React.Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return (
            <Tab.Navigator
            labeled = {false}
            barStyle = {styles.bottomtabstyle}
            screenOptions = {({route})=>({
              tabBarIcon: ({focused, color, size})=>{
              let iconname;
    
              if(route.name==='Feed'){
                iconname = focused?'home':'home-outline';
              }else if(route.name === 'CreatePosts'){
                iconname = focused?'add-circle':'add-circle-outline'
              }
              return < Ionicons name = {iconname} itemname size = {RFValue(25)} color = {color} style = {styles.icons}/>
              },})}
              tabBarOptions = {{
                activeTintColor: 'black',
                inactiveTintColor: 'grey'
              }}>
              <Tab.Screen name = "Helping-Hand" component = {HelpingHand} options = {{unmountOnBlur: true}}/>
              <Tab.Screen name = "Level-Select" component = {LevelSelect} options = {{unmountOnBlur: true}} />
              </Tab.Navigator>
        );
      }
      }
    
      const styles = StyleSheet.create({
        bottomtabstyle:{
          backgroundColor: "#2f345d",
          height: '6%',
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          overflow: "hidden",
          position: "absolute",
          opacity: 0.7
        },
        icons: {
          width: RFValue(30),
          height: RFValue(30),
        }
      });