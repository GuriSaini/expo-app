import { Text, SafeAreaView, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:"#ddd",display:"flex",flex:"1",justifyContent:"center"}}>
      <View style={{ justifyContent:"center",alignItems:"center",alignContent:"center"}}>
        <Text>Home Screen</Text>
        
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
