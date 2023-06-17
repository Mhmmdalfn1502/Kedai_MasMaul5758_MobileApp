import React from "react";
import { Image, View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { FlatList } from "react-native-web";
import { FontAwesome5 } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";

// D9D9D9
// F5D247
// F2B040

const ProductFlavorItem = [
  { id: 1, image: require("../assets/food1.png"), name: "Chocolate Latte", harga: "Rp 10.000" },
  { id: 2, image: require("../assets/food1.png"), name: "Coffe Latte", harga: "Rp 10.000" },
  { id: 3, image: require("../assets/food1.png"), name: "Green Tea Latte", harga: "Rp 10.000" },
  { id: 4, image: require("../assets/food1.png"), name: "Thai Tea Latte", harga: "Rp 10.000" },
  { id: 5, image: require("../assets/food1.png"), name: "Red Valvet Latte", harga: "Rp 10.000" },
  { id: 6, image: require("../assets/food1.png"), name: "Taro latte", harga: "Rp 10.000" },
  { id: 7, image: require("../assets/food1.png"), name: "Manggo Latte", harga: "Rp 10.000" },
  { id: 8, image: require("../assets/food1.png"), name: "Brown Sugar Latte", harga: "Rp 10.000" },
];
const ProductIceDrink = [
  { id: 1, image: require("../assets/food1.png"), name: "Es Good day", harga: "Rp 5.000" },
  { id: 2, image: require("../assets/food1.png"), name: "Es Coffe mix", harga: "Rp 5.000" },
  { id: 3, image: require("../assets/food1.png"), name: "Es Jerman", harga: "Rp 5.000" },
  { id: 4, image: require("../assets/food1.png"), name: "Es NataCino", harga: "Rp 5.000" },
];
const ProductFruitJuice = [
  { id: 1, image: require("../assets/food1.png"), name: "Jus Jambu Merah", harga: "Rp 10.000" },
  { id: 2, image: require("../assets/food1.png"), name: "Jus Mangga", harga: "Rp 10.000" },
  { id: 3, image: require("../assets/food1.png"), name: "Jus Belimbing", harga: "Rp 10.000" },
  { id: 4, image: require("../assets/food1.png"), name: "Jus Alpukat", harga: "Rp 10.000" },
  { id: 5, image: require("../assets/food1.png"), name: "Jus Buah Naga", harga: "Rp 10.000" },
];
const ProductSpecialDrink = [
  { id: 1, image: require("../assets/food1.png"), name: "Es Jeruk", harga: "Rp 5.000" },
  { id: 2, image: require("../assets/food1.png"), name: "Es The Manis", harga: "Rp 5.000" },
  { id: 3, image: require("../assets/food1.png"), name: "Es Teh Tarik", harga: "Rp 5.000" },
  { id: 4, image: require("../assets/food1.png"), name: "Lemon Tea", harga: "Rp 7.000" },
  { id: 5, image: require("../assets/food1.png"), name: "Leci Tea", harga: "Rp 7.000" },
  { id: 6, image: require("../assets/food1.png"), name: "Ovaltime", harga: "Rp 5.000" },
  { id: 7, image: require("../assets/food1.png"), name: "Milo", harga: "Rp 5.000" },
  { id: 8, image: require("../assets/food1.png"), name: "Nutrisari", harga: "Rp 5.000" },
  { id: 9, image: require("../assets/food1.png"), name: "Fanta", harga: "Rp 5.000" },
  { id: 10, image: require("../assets/food1.png"), name: "Coca Cola", harga: "Rp 5.000" },
  { id: 11, image: require("../assets/food1.png"), name: "Sprite", harga: "Rp 5.000" },
  { id: 12, image: require("../assets/food1.png"), name: "Pulpy Orange", harga: "Rp 6.000" },
  { id: 13, image: require("../assets/food1.png"), name: "Frestea", harga: "Rp 5.000" },
  { id: 14, image: require("../assets/food1.png"), name: "Ades", harga: "Rp 5.000" },
  { id: 15, image: require("../assets/food1.png"), name: "Aqua/Vit", harga: "Rp 4.000" },
  { id: 16, image: require("../assets/food1.png"), name: "Le Minerale", harga: "Rp 4.000" },
  { id: 17, image: require("../assets/food1.png"), name: "Nutri Boots", harga: "Rp 8.000" },
];

const ProductHotDrinks = [
  { id: 1, image: require("../assets/food1.png"), name: "Liong Bulan", harga: "Rp 4.000" },
  { id: 2, image: require("../assets/food1.png"), name: "Kapal Api", harga: "Rp 4.000" },
  { id: 3, image: require("../assets/food1.png"), name: "Good Day", harga: "Rp 4.000" },
  { id: 4, image: require("../assets/food1.png"), name: "Tora Bika", harga: "Rp 4.000" },
  { id: 5, image: require("../assets/food1.png"), name: "Cappuchino", harga: "Rp 5.000" },
  { id: 6, image: require("../assets/food1.png"), name: "White Coffe", harga: "Rp 5.000" },
  { id: 7, image: require("../assets/food1.png"), name: "Susu Jahe", harga: "Rp 5.000" },
];

const DrinkPage = ({ item }) => {
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
            <Text style={{ ...styles.TextOpsi, color: "black" }}>Drink</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button1}>
            <Text style={styles.TextOpsi}>Snack</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.MenuList}>
        <Text style={styles.JudulMenu}>Flavor Item</Text>
        <View style={styles.Food}>
          <FlatList data={ProductFlavorItem} keyExtractor={(item) => item.id} renderItem={renderProductItem} />
        </View>

        <Text style={styles.JudulMenu}>Ice Drink</Text>
        <View style={styles.Food}>
          <FlatList data={ProductFruitJuice} keyExtractor={(item) => item.id} renderItem={renderProductItem} />
        </View>

        <Text style={styles.JudulMenu}>Fruit Juice</Text>
        <View style={styles.Food}>
          <FlatList data={ProductIceDrink} keyExtractor={(item) => item.id} renderItem={renderProductItem} />
        </View>

        <Text style={styles.JudulMenu}>Special Drink</Text>
        <View style={styles.Food}>
          <FlatList data={ProductSpecialDrink} keyExtractor={(item) => item.id} renderItem={renderProductItem} />
        </View>

        <Text style={styles.JudulMenu}>Hot Drink</Text>
        <View style={styles.Food}>
          <FlatList data={ProductHotDrinks} keyExtractor={(item) => item.id} renderItem={renderProductItem} />
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

export default DrinkPage;
