import { Text, SafeAreaView, View, Alert,ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const ProfileScreen = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        display: "flex",
        flex: "1",
      }}
    >
        <ScrollView showsVerticalScrollIndicator="false">
      <View
        style={{
          padding: 20,
          marginTop: 80,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <View
            style={{
              width: 150,
              height: 150,
              backgroundColor: "black",
              borderRadius: 100,
            }}
          ></View>

          <View style={{ padding: 10, marginTop: 30 }}>
            <Text style={{ fontSize: 22, fontWeight: "500" }}>
              React Element
            </Text>
          </View>
          <View
            style={{ padding: 5, flexDirection: "row", alignItems: "center" }}
          >
            <AntDesign name="skin" size={21} color="pink" />
            <View style={{ marginLeft: 2 }}></View>
            <Text style={{ fontSize: 14, fontWeight: "500" }}>Normal Skin</Text>
          </View>
        </View>
        
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Text>
     

      
        <TouchableOpacity
          onPress={() => Alert.alert("Simple Button pressed")}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <MaterialIcons name="logout" size={24} color="pink" />
          <Text style={{color:"pink"}}>Sign out</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
