import React, { useState } from "react";
import { View, Text, Image, TextInput, Button, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isOpenPass, setOpenPass] = useState(true);

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
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
    <View style={styles.container}>
      <View style={styles.Logo}>
        <Image source={require("../assets/Kedai.png")} style={{ width: 150, height: 150 }} />
      </View>
      <View style={{ flex: 2, alignItems: "center" }}>
        {/* Username */}
        <View style={{ marginBottom: 10 }}>
          <Text style={{ marginBottom: 5 }}>Username</Text>
          <View style={styles.BoxInput}>
            <View style={styles.userIcon}>
              <FontAwesome5 name="user" size={20} color="green" />
            </View>
            <TextInput style={{ ...styles.input, borderTopRightRadius: 10, borderBottomRightRadius: 10 }} placeholder="Masukkan Username" onChangeText={(text) => setUsername(text)} value={username} />
          </View>
        </View>
        {/* Password */}
        <View>
          <Text style={{ marginBottom: 5 }}>Password</Text>
          <View style={styles.BoxInput}>
            <View style={styles.userIcon}>
              <FontAwesome5 name="key" size={20} color="#98BF7A" />
            </View>
            <TextInput style={{ ...styles.input, borderRadius: 0, borderRightWidth: 0, width: 250 }} placeholder="Password" onChangeText={(text) => setPassword(text)} value={password} secureTextEntry />
            <Pressable
              onPress={() => handlerOpenPassword()}
              style={{ alignItems: "center", justifyContent: "center", padding: 10, borderWidth: 1, borderBottomRightRadius: 10, borderTopRightRadius: 10, borderColor: "grey", borderLeftWidth: 0, width: 50, height: 50 }}
            >
              <FontAwesome5 name={isOpenPass ? "eye" : "eye-slash"} size={20} color="$98BF7A" />
            </Pressable>
          </View>
          <View style={{ flexDirection: "row-reverse" }}>
            <TouchableOpacity>
              <Text style={{ color: "#98BF7A" }}>Lupa Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* LupaPW */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>MASUK</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text>Belum memiliki akun?</Text>
          <TouchableOpacity>
            <Text style={{ color: "#98BF7A", fontWeight: "bold" }}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  Logo: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  BoxInput: {
    flexDirection: "row",
    width: "100%",
  },
  userIcon: {
    borderWidth: 1,
    borderRightWidth: 0,
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: "#98BF7A",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  input: {
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: "#98BF7A",
    width: 300,
    height: 50,
  },
  button: {
    backgroundColor: "#98BF7A",
    paddingVertical: 10,
    paddingHorizontal: 90,
    borderRadius: 10,
    marginTop: 20,
    width: 350,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 15,
    color: "white",
  },
});

export default SignUp;
