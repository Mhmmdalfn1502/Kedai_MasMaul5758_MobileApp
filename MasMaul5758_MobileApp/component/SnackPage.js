import React from "react";
import { Image, View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { FlatList } from "react-native-web";
import { FontAwesome5 } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";

// D9D9D9
// F5D247
// F2B040

const ProductPisang = [
  { id: 1, Image: require("../assets/Snack/Pisang.jpg"), name: "Pisang Original", harga: "Rp 10.000" },
  { id: 2, Image: require("../assets/Snack/Pisang.jpg"), name: "Pisang Keju Susu", harga: "Rp 10.000" },
  { id: 3, Image: require("../assets/Snack/Pisang.jpg"), name: "Pisang Susu Cokelat", harga: "Rp 10.000" },
  { id: 4, Image: require("../assets/Snack/Pisang.jpg"), name: "Pisang Susu Oreo", harga: "Rp 10.000" },
  { id: 5, Image: require("../assets/Snack/Pisang.jpg"), name: "Pisang Susu Matcha", harga: "Rp 10.000" },
  { id: 6, Image: require("../assets/Snack/Pisang.jpg"), name: "Pisang Susu Tiramisu", harga: "Rp 13.000" },
  { id: 7, Image: require("../assets/Snack/Pisang.jpg"), name: "Pisang Keju Susu Cokelat", harga: "Rp 13.000" },
  { id: 8, Image: require("../assets/Snack/Pisang.jpg"), name: "Pisang Keju Susu Oreo", harga: "Rp 13.000" },
  { id: 9, Image: require("../assets/Snack/Pisang.jpg"), name: "Pisang Keju Susu Matcha", harga: "Rp 13.000" },
  { id: 10, Image: require("../assets/Snack/Pisang.jpg"), name: "Pisang Keju Susu Tiramisu", harga: "Rp 15.000" },
  { id: 11, Image: require("../assets/Snack/Pisang.jpg"), name: "Choco Banana Crispy", harga: "Rp 10.000" },
];

const SnackPage = ({ item }) => {
  const handleBackPress = () => {
    // Implementasikan logika untuk menangani tombol kembali
    console.log("Tombol Kembali Ditekan");
  };

  const renderProductItem = ({ item }) => (
    <View style={{ flexDirection: "row", marginVertical: 10, justifyContent: "space-between", marginTop: 20 }}>
      <View style={{ flexDirection: "row" }}>
        <Image source={item.Image} style={styles.FoodImage} />
        <View style={styles.DescFood}>
          <Text style={styles.NameFood}>{item.name}</Text>
          <Text style={styles.PriceFood}>{item.harga}</Text>
        </View>
      </View>
      <View style={styles.add}>
        <TouchableOpacity style={styles.Addbtn}>
          <Text style={styles.AddText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.NavBar}>
          <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
            <FontAwesome5 name="chevron-left" size={25} color="#025464" />
          </TouchableOpacity>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Menu</Text>
          <TouchableOpacity>
            <FontAwesome5 name="search" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", padding: 15 }}>
          <Image source={require("../assets/Kedai.png")} style={{ width: 120, height: 120 }} />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Kedai Mas Maul 5758</Text>
        </View>
        <View style={styles.OpsiList}>
          <TouchableOpacity style={styles.Button1}>
            <Text style={styles.TextOpsi}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button1}>
            <Text style={styles.TextOpsi}>Drink</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button1}>
            <Text style={{ ...styles.TextOpsi, color: "black" }}>Snack</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.MenuList}>
        <Text style={styles.JudulMenu}>Paket Pisang</Text>
        <View style={styles.Food}>
          <FlatList data={ProductPisang} keyExtractor={(item) => item.id} renderItem={renderProductItem} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    elevation: 4, // Memberikan efek bayangan
    shadowColor: "black", // Warna bayangan
    shadowOffset: { width: 0, height: 2 }, // Ukuran bayangan
    shadowOpacity: 0.25, // Opasitas bayangan
    shadowRadius: 4, // Jarak bayangan
  },
  NavBar: {
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 4, // Memberikan efek bayangan
    shadowColor: "black", // Warna bayangan
    shadowOffset: { width: 0, height: 2 }, // Ukuran bayangan
    shadowOpacity: 0.25, // Opasitas bayangan
    shadowRadius: 4, // Jarak bayangan
  },
  backButton: {
    paddingHorizontal: 5,
  },
  emptyPlaceholder: {
    width: 30,
  },
  OpsiList: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Button1: {
    borderWidth: 0,
  },
  TextOpsi: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 30,
    marginVertical: 20,
    color: "#F2B040",
  },
  MenuList: {
    flex: 7,
    padding: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  Food: {
    flexDirection: "row",
    alignItems: "center",
  },
  JudulMenu: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginTop: 10,
  },
  FoodImage: {
    width: 60,
    height: 45,
  },
  DescFood: {
    flexDirection: "column",
    marginLeft: 10,
  },
  NameFood: {
    fontSize: 18,
    fontWeight: "bold",
  },
  PriceFood: {
    fontSize: 20,
    color: "#F2B040",
    fontWeight: "bold",
  },
  add: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  Addbtn: {
    width: 45,
    height: 27,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#F2B040",
  },
  AddText: {
    fontSize: 15,
  },
});

export default SnackPage;
