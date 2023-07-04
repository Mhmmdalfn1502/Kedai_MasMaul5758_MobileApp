import React from 'react';
import { View, StyleSheet, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Payment = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack(); // Navigasi kembali ke halaman sebelumnya (FoodPage)
  };

  const paymentMethods = [
    { id: 'qris', logo: require('../assets/qris.png'), text: 'QRIS' },
    { id: 'cash', logo: require('../assets/cash.png'), text: 'Cash' },
  ];

  const renderPaymentMethodItem = ({ item }) => {
    const onPressPaymentMethod = () => {
      if (item.id === 'qris') {
        // Validasi untuk elemen "QRIS"
        console.log('QRIS element clicked');
        // Tambahkan logika atau navigasi khusus untuk elemen "QRIS" di sini
        navigation.navigate('Paymentqr'); // Navigasi ke halaman "PaymentQr"
      } else if (item.id === 'cash') {
        // Validasi untuk elemen "Cash"
        console.log('Cash element clicked');
        // Tambahkan logika atau navigasi khusus untuk elemen "Cash" di sini
        navigation.navigate('Paymentcash'); // Navigasi ke halaman "PaymentCash"
      }
    };

    return (
      <TouchableOpacity style={styles.paymentMethodItem} onPress={onPressPaymentMethod}>
        <Image source={item.logo} style={styles.paymentMethodLogo} />
        <Text style={styles.paymentMethodText}>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.back} onPress={handleGoBack}>
          <Icon name="angle-left" size={30} color="#000" />
        </TouchableOpacity>
        <View style={styles.centerContainer}>
          <Text style={styles.title}>PAYMENT</Text>
        </View>
      </View>

      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.id}
        renderItem={renderPaymentMethodItem}
      />
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
  paymentMethodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  paymentMethodLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  paymentMethodText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Payment;
