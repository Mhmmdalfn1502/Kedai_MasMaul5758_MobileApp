import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import PaymentTf from "../PaymentTf";
import Paymentsukses from "../Paymentsukses";
import Payment from "../Payment";
import Paymentcash from "../Paymentcash";
import Foodpage from "../Foodpage";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Foodpage"component={Foodpage} options={{ headerShown: false }}/>
        <Stack.Screen name="Payment" component={Payment}options={{ headerShown: false }} />
        <Stack.Screen name="PaymentTf"component={PaymentTf}options={{ headerShown: false }}/>
        <Stack.Screen name="Paymentcash"component={Paymentcash} options={{ headerShown: false }}/>
        <Stack.Screen name="Paymentsukses"component={Paymentsukses} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
