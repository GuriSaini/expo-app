import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigation/RootStack";
import MainStack from "./src/navigation/MainStack";

export default function App() {
  const [isLogin,setIsLogin] = React.useState(false)
  return (
    <NavigationContainer>
     {!isLogin ? MainStack() : RootStack()}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
