import React from 'react';
import { View, StyleSheet, FlatList, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Payment = () => {
  const paymentMethods = [
    { id: 'qris', logo: require('../assets/qris.png'), text: 'QRIS' },
    { id: 'cash', logo: require('../assets/cash.png'), text: 'Cash' },
  ];

  const renderPaymentMethodItem = ({ item }) => (
    <View style={styles.paymentMethodItem}>
      <Image source={item.logo} style={styles.paymentMethodLogo} />
      <Text style={styles.paymentMethodText}>{item.text}</Text>
    </View>
  );

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
