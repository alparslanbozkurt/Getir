import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';// bu komutla indirilir -> npm install @react-navigation/bottom-tabs
import Entypo from '@expo/vector-icons/Entypo'; 
import HomeNavigator from "./HomeNavigator";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

function RootNavigator() {
    const CustomTabBarButton = ({children}) => {
        return(
            <TouchableOpacity
                style={{
                    width:60,
                    height:60,
                    backgroundColor:"#5C3EBC",
                    justifyContent:'center',
                    alignItems: 'center',
                    marginTop: -4,
                    borderWidth:3,
                    borderColor: 'white',
                    borderRadius:30
                }}
            >
                <Entypo name="list" size={32} color="#FFD00C" />
            </TouchableOpacity>
        )
    }
    return (
        <Tab.Navigator
            initialRouteName="Ana Sayfa"
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#5C3EBC',
                tabBarInactiveTintColor: '#959595',
                headerShown: false,
                tabBarStyle: {
                    height: 80,
                }
            }}
        >
            <Tab.Screen
                name="Ana Sayfa"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="Search"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="search" size={24} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="List"
                component={HomeNavigator}
                options={{
                    tabBarButton: (props) => <CustomTabBarButton {...props}/>
                }}
            />

            <Tab.Screen
                name="Personal"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" size={24} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="Gift"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="gift" size={24} color={color} />
                    )
                }}
            />

        </Tab.Navigator>
    );
}

export default RootNavigator;
