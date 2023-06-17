import React, { useState } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, TextInput, Alert, Platform, Pressable } from "react-native";
import { FlatList } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

// D9D9D9
// F5D247
// F2B040

const LoginPage = ({ navigation }) => {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [isOpenPass, setOpenPass] = useState(true);
  const [validCode, setValidCode] = useState("");

  const handlerValidCode = (value) => {
    if (value) {
      setValidCode("");
    } else {
      setValidCode("This field is required");
    }
  };

  const checkPasswordValidity = (value) => {};
  const handleLogin = () => {
    const checkPassword = checkPasswordValidity(password);
    if (!checkPassword) {
      alert("succes login");
    } else {
      alert(checkPassword);
    }
  };

  const handlerOpenPassword = () => {
    switch (!isOpenPass) {
      case true:
        setOpenPass(true);
        break;
      default:
        setOpenPass(false);
        break;
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView contentContainerStyle={{ flex: 1 }} bounces={false}>
        <View style={styles.container}>
          <View style={styles.LogoFrame}>
            <Image source={require("../assets/Kedai.png")} style={styles.Logo} />
          </View>
          <View style={styles.Login}>
            <View>
              <Text style={{ fontSize: 25, fontWeight: "bold", marginVertical: 20 }}>Login</Text>
            </View>
            <View style={styles.frm_row}>
              <TextInput style={styles.input} placeholder="Input Code" autoCorrect={false} autoCapitalize="none" defaultValue={code} onChangeText={(text) => handlerValidCode(text)} />
              <Text style={{ color: "red", marginTop: 5 }}>{validCode}</Text>
            </View>
            <View style={{ ...styles.frm_row, flexDirection: "row" }}>
              <TextInput
                style={{ ...styles.input, borderRightWidth: 0, width: 250, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                secureTextEntry={isOpenPass}
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                value={password}
              />
              <Pressable
                onPress={() => handlerOpenPassword()}
                style={{ alignItems: "center", justifyContent: "center", padding: 10, borderWidth: 1, borderBottomRightRadius: 5, borderTopRightRadius: 5, borderColor: "grey", borderLeftWidth: 0 }}
              >
                <FontAwesome5 name={isOpenPass ? "eye" : "eye-slash"} size={25} color="#F2B040" />
              </Pressable>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>

          {/* FOOTER */}
          <View style={styles.Footer}>
            <View style={{ backgroundColor: "#D9D9D9", width: "width", height: 120, flexDirection: "column-reverse" }}>
              <View style={{ backgroundColor: "#F5D247", width: "width", height: 100, flexDirection: "column-reverse" }}>
                <View style={{ backgroundColor: "#F2B040", width: "width", height: 80, flexDirection: "column-reverse" }}></View>
              </View>
            </View>
          </View>
          {/* FOOTER */}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
  Login: {
    flex: 3,
    alignItems: "center ",
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
  frm_row: { marginBottom: 5 },
  text_label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  input: {
    width: 300,
    padding: 12,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 4,
    borderWidth: 1,
  },
  Footer: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column-reverse",
  },
});

export default LoginPage;
