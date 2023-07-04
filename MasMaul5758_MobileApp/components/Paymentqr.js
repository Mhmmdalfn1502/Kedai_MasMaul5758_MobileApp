import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Paymentqr = () => {
  const navigation = useNavigation();

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
        <Image source={require('../assets/qris.png')} style={styles.qrImage} />
        <Image source={require('../assets/barcode.png')} style={styles.barcodeImage} />
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Paymentsukses')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
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
  qrImage: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  barcodeImage: {
    width: 300,
    height: 300,
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#F5D247',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Paymentqr;
