import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Adrian = () => {
  const [nama, setNama] = useState("");
  const [nomor, setNomor] = useState("");
  const [isOpenPass, setOpenPass] = useState(true);

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

  const handleLogin = () => {
    console.log("Nama:", nama);
    console.log("Nomor:", nomor);
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxInput}>
        <Text>Nama Lengkap</Text>
        <TextInput style={styles.input} placeholder="Masukkan Nama Lengkap" onChangeText={(text) => setNama(text)} value={nama} />
      </View>
      <View style={styles.boxInput}>
        <Text>Nomor HP</Text>
        <TextInput style={styles.input} placeholder="Masukkan Nomor HP" onChangeText={(text) => setNomor(text)} value={nomor} secureTextEntry />
      </View>
      <View style={styles.boxInput}>
        <Text>Username</Text>
        <TextInput style={styles.input} placeholder="Masukkan UsernameP" onChangeText={(text) => setNomor(text)} value={nomor} secureTextEntry />
      </View>
      <View style={styles.boxInput}>
        <Text>Password</Text>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <TextInput
            style={{ ...styles.input, width: 350, borderEndWidth: 0, marginTop: 0, borderBottomRightRadius: 0, borderTopEndRadius: 0 }}
            placeholder="Masukkan Password"
            onChangeText={(text) => setNomor(text)}
            value={nomor}
            secureTextEntry
          />
          <Pressable
            onPress={() => handlerOpenPassword()}
            style={{ alignItems: "center", justifyContent: "center", padding: 10, borderWidth: 1, borderBottomRightRadius: 10, borderTopRightRadius: 10, borderColor: "grey", borderLeftWidth: 0, width: 50, height: 50 }}
          >
            <FontAwesome5 name={isOpenPass ? "eye" : "eye-slash"} size={20} color="$98BF7A" />
          </Pressable>
        </View>
      </View>
      <View style={styles.boxInput}>
        <Text>Konfirmasi Password</Text>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <TextInput
            style={{ ...styles.input, width: 350, borderEndWidth: 0, marginTop: 0, borderBottomRightRadius: 0, borderTopEndRadius: 0 }}
            placeholder="Konfirmasi Password"
            onChangeText={(text) => setNomor(text)}
            value={nomor}
            secureTextEntry
          />
          <Pressable
            onPress={() => handlerOpenPassword()}
            style={{ alignItems: "center", justifyContent: "center", padding: 10, borderWidth: 1, borderBottomRightRadius: 10, borderTopRightRadius: 10, borderColor: "grey", borderLeftWidth: 0, width: 50, height: 50 }}
          >
            <FontAwesome5 name={isOpenPass ? "eye" : "eye-slash"} size={20} color="$98BF7A" />
          </Pressable>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={true}>
        <Text style={styles.buttonText}>MASUK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  boxInput: {
    flexDirection: "column",
  },
  input: {
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginTop: 5,
    height: 50,
    borderColor: "#98BF7A",
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

export default Adrian;
