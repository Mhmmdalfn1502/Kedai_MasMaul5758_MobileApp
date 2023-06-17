import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

const SplashScreen = ({ navigation }) => {
  const handleButtonPress = () => {
    console.log("Tombol ditekan!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.LogoFrame}>
        <Image source={require("../assets/Kedai.png")} style={styles.Logo} />
      </View>
      <View style={styles.ButtonFrame}>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>ORDER NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  LogoFrame: {
    flex: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  Logo: {
    width: 250,
    height: 250,
  },
  ButtonFrame: {
    flex: 2,
    backgroundColor: "white",
    alignItems: "center",
  },
  button: {
    backgroundColor: "orange",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "josefin sans",
  },
});

export default SplashScreen;
