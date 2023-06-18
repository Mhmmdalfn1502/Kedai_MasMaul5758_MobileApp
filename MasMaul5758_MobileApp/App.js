import "react-native-gesture-handler";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import SplashScreen from "./component/SplashScreen";
import LoginPage from "./component/LoginPage";
import FoodPage from "./component/FoodPage";
import FoodProduct from "./assets/FoodProduct";
import { useFonts } from "expo-font";
import SnackPage from "./component/SnackPage";
import DrinkPage from "./component/DrinkPage";
import SignUp from "./component/SignUp";
import Stack from "./component/Stack";
import MyStack from "./component/Stack";
import Adrian from "./component/Adrian";

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Montserrat: require("./assets/Font/Montserrat-Reguler.ttf"),
  // });
  return (
    <SafeAreaView style={styles.container}>
      <FoodPage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
