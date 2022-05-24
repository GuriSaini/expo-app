import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "../components/OnBoarding";
import LoginScreen from "../screens/auth/LoginScreen";

const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboard" component={OnBoarding} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
