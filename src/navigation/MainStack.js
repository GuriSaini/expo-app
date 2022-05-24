import { createNativeStackNavigator } from "@react-navigation/native-stack";
import bottomTabs from "../container/BottomTabs";

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="bottom" component={bottomTabs} />
    </Stack.Navigator>
  );
};

export default MainStack;
