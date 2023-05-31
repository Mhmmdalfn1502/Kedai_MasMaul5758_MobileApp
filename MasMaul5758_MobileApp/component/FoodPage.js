import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

// D9D9D9
// F5D247
// F2B040

const FoodPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Jumbotron}>
        <Image source={require("../assets/Frame 1.png")} style={styles.Jb1} />
        <View style={styles.OpsiList}>
          <Text style={styles.TextOpsi}>Food</Text>
          <Text style={styles.TextOpsi}>Drink</Text>
          <Text style={styles.TextOpsi}>Desert</Text>
        </View>
      </View>
      <View style={styles.MenuList}>
        <View style={styles.Food}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Image source={require("../assets/food1.png")} style={styles.FoodImage} />
            <View style={styles.DescFood}>
              <Text style={styles.NameFood}>Cappucino Latte</Text>
              <Text style={styles.PriceFood}>Rp 5.000</Text>
            </View>
          </View>
          <View style={styles.Add}>
            <Text>Add</Text>
          </View>
        </View>
        <View style={styles.Food}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Image source={require("../assets/food1.png")} style={styles.FoodImage} />
            <View style={styles.DescFood}>
              <Text style={styles.NameFood}>Cappucino Latte</Text>
              <Text style={styles.PriceFood}>Rp 5.000</Text>
            </View>
          </View>
          <View style={styles.Add}>
            <Text>Add</Text>
          </View>
        </View>
        <View style={styles.Food}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Image source={require("../assets/food1.png")} style={styles.FoodImage} />
            <View style={styles.DescFood}>
              <Text style={styles.NameFood}>Cappucino Latte</Text>
              <Text style={styles.PriceFood}>Rp 5.000</Text>
            </View>
          </View>
          <View style={styles.Add}>
            <Text>Add</Text>
          </View>
        </View>
        <View style={styles.Food}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Image source={require("../assets/food1.png")} style={styles.FoodImage} />
            <View style={styles.DescFood}>
              <Text style={styles.NameFood}>Cappucino Latte</Text>
              <Text style={styles.PriceFood}>Rp 5.000</Text>
            </View>
          </View>
          <View style={styles.Add}>
            <Text>Add</Text>
          </View>
        </View>
        <View style={styles.Food}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Image source={require("../assets/food1.png")} style={styles.FoodImage} />
            <View style={styles.DescFood}>
              <Text style={styles.NameFood}>Cappucino Latte</Text>
              <Text style={styles.PriceFood}>Rp 5.000</Text>
            </View>
          </View>
          <View style={styles.Add}>
            <Text>Add</Text>
          </View>
        </View>
        <View style={styles.Food}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Image source={require("../assets/food1.png")} style={styles.FoodImage} />
            <View style={styles.DescFood}>
              <Text style={styles.NameFood}>Cappucino Latte</Text>
              <Text style={styles.PriceFood}>Rp 5.000</Text>
            </View>
          </View>
          <View style={styles.Add}>
            <Text>Add</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "josefin sans",
  },
  Jumbotron: {
    flex: 3,
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  Jb1: {
    width: 350,
    height: 150,
    borderRadius: 20,
  },
  OpsiList: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TextOpsi: {
    fontSize: 15,
    fontFamily: "josefin sans",
    fontWeight: "bold",
    marginHorizontal: 30,
    marginVertical: 20,
  },
  MenuList: {
    flex: 7,
    alignItems: "cemter",
    padding: 10,
  },
  Food: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  FoodImage: {
    width: 50,
    height: 40,
  },
  DescFood: {
    flexDirection: "column",
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
  Add: {
    width: 45,
    height: 27,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FoodPage;
