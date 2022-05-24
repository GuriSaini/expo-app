import { Text,SafeAreaView,View } from "react-native";

const AddPost = () => {
  return (
    <SafeAreaView
    style={{
      backgroundColor: "#ddd",
      display: "flex",
      flex: "1",
      justifyContent: "center",
    }}
  >
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Text>Add Post Screen</Text>
    </View>
  </SafeAreaView>
  );
};

export default AddPost;
