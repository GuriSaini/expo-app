import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import HomeScreen from "../screens/Home/HomeScreen";
import { Entypo } from "@expo/vector-icons";

import ProfileScreen from "../screens/auth/ProfileScreen";
import { TouchableOpacity } from "react-native";
import AddPost from "../screens/Post/AddPost";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
  const [focus, setFocus] = React.useState(false);
  useFocusEffect(
    React.useCallback(() => {
      setFocus(true);
      return () => {
        setFocus(false);
      };
    }, [])
  );
  return (
    <TouchableOpacity
      style={{
        top: -20,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: focus ? "#e32f45" : "#748c94",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: () => false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 30,
          right: 30,
          elevation: 0,
          backgroundColor: "#fff",
          borderRadius: 15,
          height: 70,
          shadowColor: 'black',
          shadowRadius: 10,
          shadowOpacity: 0.2,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <Entypo
                name="home"
                size={32}
                color={focused ? "#e32f45" : "#748c94"}
              />
              <Text style={{ color: focused ? "#e32f45" : "#748c94" }}>
                Home
              </Text>
            </View>
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="AddPost"
        component={AddPost}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="circle-with-plus"
              size={32}
              color={focused ? "#fff" : "#fff"}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <Entypo
                name="user"
                size={32}
                color={focused ? "#e32f45" : "#748c94"}
              />
              <Text style={{ color: focused ? "#e32f45" : "#748c94" }}>
                User
              </Text>
            </View>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

export default BottomTabs;
