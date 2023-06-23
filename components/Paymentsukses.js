import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Paymentsukses = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.back}>
          <Icon name="angle-left" size={30} color="#000" />
        </View>
        <View style={styles.centerContainer}>
          <Text style={styles.title}>PAYMENT</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Image source={require('../assets/sukses.png')} style={styles.suksesImage} />
        <Text style={styles.successText}>SUCCESS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  back: {
    marginRight: 130,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  suksesImage: {
    width: 300,
    height: 300,
  },
});

export default Paymentsukses;
