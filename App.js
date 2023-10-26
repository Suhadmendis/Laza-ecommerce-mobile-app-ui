import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Splash from './src/screens/Splash';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
import Screen3 from './src/screens/Screen3';
import Screen4 from './src/screens/Screen4';
import Screen5 from './src/screens/Screen5';

import Temp from './src/screens/Temp';


export default function App() {
  return (
    // <Splash />
    // <Screen1 />
    // <Screen2 />
    // <Screen3 />
    // <Screen4 />
    <Screen5 />
    // <Temp />
    // <View style={styles.container}>



    //   {/* <StatusBar style="auto" /> */}
    // </View>
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
