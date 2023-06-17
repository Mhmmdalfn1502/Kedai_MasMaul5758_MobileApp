import React from "react";
import { Image, View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { FlatList } from "react-native-web";
import { FontAwesome5 } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";

// D9D9D9
// F5D247
// F2B040

const ProductNasiAyam = [
  { id: 1, Image: require("../assets/Food/NasiAyam.png"), name: "Tahu", harga: "Rp 2.000" },
  { id: 2, Image: require("../assets/Food/NasiAyam.png"), name: "Tempe", harga: "Rp 2.000" },
  { id: 3, Image: require("../assets/Food/NasiAyam.png"), name: "Nasi", harga: "Rp 5.000" },
  { id: 4, Image: require("../assets/Food/NasiAyam.png"), name: "Tempe Mendoan", harga: "Rp 10.000" },
  { id: 5, Image: require("../assets/Food/NasiAyam.png"), name: "Ayam Serundeng", harga: "Rp 10.000" },
  { id: 6, Image: require("../assets/Food/NasiAyam.png"), name: "Nasi Ayam Serundeng", harga: "Rp 16.000" },
  { id: 7, Image: require("../assets/Food/NasiAyam.png"), name: "Paket Nasi Ayam", harga: "Rp 18.000" },
  { id: 8, Image: require("../assets/Food/NasiAyam.png"), name: "Nasi Ayam Pok-pok Telur", harga: "Rp 20.000" },
];

const ProductIndomie = [
  { id: 1, Image: require("../assets/Food/Mie.png"), name: "Indomie Biasa", harga: "Rp 7.000" },
  { id: 2, Image: require("../assets/Food/Mie.png"), name: "Indomie Telur", harga: "Rp 10.000" },
  { id: 3, Image: require("../assets/Food/Mie.png"), name: "Indomie Telur Keju", harga: "Rp 13.000" },
  { id: 4, Image: require("../assets/Food/Mie.png"), name: "Indomie Telur Kornet", harga: "Rp 15.000" },
  { id: 5, Image: require("../assets/Food/Mie.png"), name: "Indomie Telur Kornet Keju", harga: "Rp 17.000" },
  { id: 6, Image: require("../assets/Food/Mie.png"), name: "Indomie Spesial", harga: "Rp 20.000" },
  { id: 7, Image: require("../assets/Food/Mie.png"), name: "Mie Nyemek", harga: "Rp 15.000" },
];

const ProductBaru = [
  { id: 1, Image: require("../assets/food1.png"), name: "Nasi Goreng", harga: "Rp 15.000" },
  { id: 2, Image: require("../assets/food1.png"), name: "Seblak", harga: "Rp 15.000" },
  { id: 3, Image: require("../assets/food1.png"), name: "Kue Cubit", harga: "Rp 10.000" },
  { id: 4, Image: require("../assets/food1.png"), name: "Sambal Ceker", harga: "Rp 15.000" },
  { id: 5, Image: require("../assets/food1.png"), name: "Pentol Kuah", harga: "Rp 15.000" },
  { id: 6, Image: require("../assets/food1.png"), name: "Okonomiyaki", harga: "Rp 13.000" },
  { id: 7, Image: require("../assets/food1.png"), name: "Omlet Korea", harga: "Rp 13.000" },
  { id: 8, Image: require("../assets/food1.png"), name: "Bakso Solo isi Daging", harga: "Rp 15.000" },
];

const FoodPage = ({ item, navigation }) => {
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
            <Text style={{ ...styles.TextOpsi, color: "black" }}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button1}>
            <Text style={styles.TextOpsi}>Drink</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button1}>
            <Text style={styles.TextOpsi}>Snack</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.MenuList}>
        <Text style={styles.JudulMenu}>Paket Nasi Ayam</Text>
        <View style={styles.Food}>
          <FlatList data={ProductNasiAyam} keyExtractor={(item) => item.id} renderItem={renderProductItem} />
        </View>

        <Text style={styles.JudulMenu}>Paket Indomie</Text>
        <View style={styles.Food}>
          <FlatList data={ProductIndomie} keyExtractor={(item) => item.id} renderItem={renderProductItem} />
        </View>

        <Text style={styles.JudulMenu}>Menu Baru</Text>
        <View style={styles.Food}>
          <FlatList data={ProductBaru} keyExtractor={(item) => item.id} renderItem={renderProductItem} />
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
  TextOpsiKlik: {
    color: "black",
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

export default FoodPage;
