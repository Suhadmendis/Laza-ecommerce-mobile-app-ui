import React from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, SafeAreaView, TouchableOpacity} from 'react-native';

const arrow = require('../assets/screen_2/Arrow_Left.png');

const social_icon_fb = require('../assets/screen_2/facebook.png');
const social_icon_t = require('../assets/screen_2/twitter.png');
const social_icon_g = require('../assets/screen_2/google.png');

const Screen2 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} activeOpacity={0.9}>
        <Image source={arrow} />
      </TouchableOpacity>

      <View style={styles.title}>
        <Text style={styles.titleText}>Let’s Get Started</Text>
      </View>

      <View style={styles.body}>
        <TouchableOpacity style={[styles.socialButtons, { backgroundColor: '#4267B2' }]} activeOpacity={0.9}>
          <Image source={social_icon_fb} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButtons, { backgroundColor: '#1DA1F2' }]} activeOpacity={0.9}>
          <Image source={social_icon_t} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButtons, { backgroundColor: '#EA4335' }]} activeOpacity={0.9}>
          <Image source={social_icon_g} />
        </TouchableOpacity>
      </View>

      <View style={styles.signinarea}>
        <Text style={styles.accText}>Already have an account? <Text style={styles.signintext}>Signin</Text></Text>
      </View>

      <View style={styles.createAccArea}>
        <Text style={styles.createAccText}>Create an Account</Text>
      </View>


    </SafeAreaView>
  );
};

export default Screen2;


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backButton: {
      width: 50,
      height: 50,
      margin: 20,
      borderRadius: '100%',
      backgroundColor: '#F5F6FA',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      alignItems: 'center',
    },
    titleText: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    body: {
      height: '70%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,

    },
    socialButtons: {
      width: '100%',
      height: 50,
      marginBottom: 10,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    signinarea: {
      alignItems: 'center',
    },
    accText: {
      fontSize: 16,
      color: '#8F959E'
    },
    signintext: {
      fontSize: 16,
      color: '#1D1E20'
    },
    createAccArea: {
      position: 'absolute',
      bottom: 0,
      padding: 15,
      width: '100%',
      height: 90,
      backgroundColor: '#9775FA',
      alignItems: 'center',
    },
    createAccText: {
      color: 'white',
      fontSize: 18,
    }
});
