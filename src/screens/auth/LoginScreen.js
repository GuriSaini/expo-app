import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";

const LoginScreen = () => {
  const windowWidth = Dimensions.get("window").width;
  
  return (
    <SafeAreaView
      style={{
        display: "flex",
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <KeyboardAvoidingView behavior="padding">
        <View style={{ width: windowWidth, marginTop: 80, padding: 10 }}>
          <View style={{ alignItems: "center" }}>
            <Image
              style={{ width: 150, height: 150 }}
              source={require("../../../assets/images/login.png")}
            />
          </View>
          <View>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}
            >
              Welcome Back!
            </Text>
          </View>

          <View style={{ marginTop: 14 }}>
            <TextInput
              style={styles.input}
              onChangeText={() => {}}
              placeholder="Enter email"
            />
            <TextInput
              style={styles.input}
              onChangeText={() => {}}
              placeholder="Enter password"
            />
          </View>
          <View style={{ alignItems: "flex-end", marginTop: 14 }}>
            <Text style={{ color: "#12579c" }}>Forget Password?</Text>
          </View>
          <View style={{ alignItems: "center", marginTop: 14 }}>
            <Pressable
              style={{
                backgroundColor: "#12579c",
                padding: 10,
                borderRadius: 5,
                width: 150,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: 21,
                  fontWeight: "400",
                }}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.bottomView}>
        <Text>Create new account?</Text>
       <TouchableOpacity>
           <Text style={{fontSize:14,fontWeight:"600",color:"#12579c"}}>Register</Text>
       </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 14,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  bottomView: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", //Here is the trick
    bottom: 20, //Here is the trick
  },
});
