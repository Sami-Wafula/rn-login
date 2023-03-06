import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import { NavigationContainer } from '@react-navigation/native';
import Login from './login/Login';

export default function App() {
  return (
    // <View style={styles.container}>
    // <View>
    <NavigationContainer>
      {/* <Text style={tw`pt-6 text-lg text-ua-purple`}>Open up App.js to start working on your app!</Text> */}
      <Login/>
      {/* <StatusBar style="auto" /> */}
    </NavigationContainer>
    /* </View> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
