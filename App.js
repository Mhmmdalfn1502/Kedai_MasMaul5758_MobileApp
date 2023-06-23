import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Foodpage from './components/Foodpage';
import Payment from './components/Payment';
import Paymentsukses from './components/Paymentsukses';
import Paymentcash from './components/Paymentcash';
import PaymentGagal from './components/PaymentGagal';
import Paymentqr from './components/Paymentqr';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
        {/* <Foodpage/> */}
        {/* <Payment/> */}
        {/* <Paymentsukses/> */}
        {/* <Paymentcash/> */}
        {/* <PaymentGagal/> */}
        {/* <Paymentqr/> */}
    </SafeAreaView>
  );
}