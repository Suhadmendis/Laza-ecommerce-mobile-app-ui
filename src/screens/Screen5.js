import React from 'react';
import { Switch } from 'react-native';
import { TextInput } from 'react-native';
import {Text, StyleSheet, View, Image, ImageBackground, SafeAreaView, TouchableOpacity} from 'react-native';

const arrow = require('../assets/screen_2/Arrow_Left.png');
const lock = require('../assets/screen_5/lock.png');

const Screen5 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} activeOpacity={0.9}>
        <Image source={arrow} />
      </TouchableOpacity>

      <View style={styles.title}>
        <Text style={styles.titleText}>Forgot Password</Text>
      </View>

      <View style={styles.body}>

        <Image style={styles.lockImage} source={lock} />

        <View style={styles.inputbox}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput style={styles.inputText} />
        </View>
        <View style={styles.seperater}></View>




      </View>

      <View style={styles.bottomTextArea}>
        <Text style={styles.bottomText}>Please write your email to receive a confirmation code to set a new password.</Text>
      </View>

      <View style={styles.createAccArea}>
        <Text style={styles.createAccText}>Confirm Mail</Text>
      </View>



    </SafeAreaView>
  );
};

export default Screen5;


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
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
      height: '60%',
      justifyContent: 'center',
      padding: 20,
    },
    lockImage: {
      marginBottom: 40,
      // marginTop: 20,
    },
    inputbox: {
      marginTop: 25,
      margin: 5
    },
    inputLabel: {
      color: '#8F959E',
    },
    inputText: {
      marginTop: 10,
      fontSize: 18,
    },
    seperater: {
      marginTop: 10,
      width: '100%',
      height: 1,
      backgroundColor: '#E7E8EA',
    },
    bottomTextArea: {
      padding: 15,
      alignItems: 'center',
      marginTop: 50,
    },
    bottomText: {
      fontSize: 14,
      color: '#8F959E',
      textAlign: 'center',
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
