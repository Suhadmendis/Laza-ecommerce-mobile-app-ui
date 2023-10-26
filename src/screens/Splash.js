import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const logo = require('../assets/logo/Logo.png');


const Splash = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Image source={logo} />
      </View>
    </View>
  );
};

export default Splash;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9775Fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

