import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../Getir/src/screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';

//https://colorhunt.co/palette/36ba98e9c46af4a261e76f51 renkler için site

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
    // HomeScreen -> Kullanıcının giriş yaptığı ana sayfa
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
