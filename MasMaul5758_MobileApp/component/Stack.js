import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./SplashScreen";
import LoginPage from "./LoginPage";
import FoodPage from "./FoodPage";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Food" component={FoodPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
