import React, { useState } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, TextInput, Alert } from "react-native";

// D9D9D9
// F5D247
// F2B040

const LoginPage = () => {
  const handleButtonPress = () => {
    console.log("Tombol ditekan!");
  };

  const [otp, setOTP] = useState("");

  const handleOTPChange = (text) => {
    setOTP(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.LogoFrame}>
        <Image source={require("../assets/Kedai.png")} style={styles.Logo} />
      </View>
      <View style={styles.PinFrame}>
        <Text style={styles.PinText}>PinCode</Text>
        <View style={styles.InputPin}>
          <TextInput style={styles.Pin} onChangeText={handleOTPChange} value={otp} keyboardType="numeric" maxLength={1} />
          <TextInput style={styles.Pin} onChangeText={handleOTPChange} value={otp} keyboardType="numeric" maxLength={1} />
          <TextInput style={styles.Pin} onChangeText={handleOTPChange} value={otp} keyboardType="numeric" maxLength={1} />
          <TextInput style={styles.Pin} onChangeText={handleOTPChange} value={otp} keyboardType="numeric" maxLength={1} />
        </View>
        <View style={styles.ButtonFrame}>
          <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Text style={styles.buttonText}>Verifikasi</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Footer}>
        <View style={{ backgroundColor: "#D9D9D9", width: "width", height: 120, flexDirection: "column-reverse" }}>
          <View style={{ backgroundColor: "#F5D247", width: "width", height: 100, flexDirection: "column-reverse" }}>
            <View style={{ backgroundColor: "#F2B040", width: "width", height: 80, flexDirection: "column-reverse" }}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  LogoFrame: {
    flex: 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  Logo: {
    width: 180,
    height: 180,
  },
  PinFrame: {
    flex: 3,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "column",
  },
  PinText: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
  },
  InputPin: {
    flexDirection: "row",
    marginTop: 30,
  },
  Pin: {
    marginHorizontal: 8,
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderColor: "black",
    textAlign: "center",
    fontSize: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    backgroundColor: "orange",
    paddingVertical: 15,
    paddingHorizontal: 90,
    borderRadius: 25,
    marginTop: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "josefin sans",
  },
  Footer: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column-reverse",
  },
});

export default LoginPage;
