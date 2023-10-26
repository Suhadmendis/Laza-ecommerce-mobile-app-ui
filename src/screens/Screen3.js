import React from 'react';
import { Switch } from 'react-native';
import { TextInput } from 'react-native';
import {Text, StyleSheet, View, Image, ImageBackground, SafeAreaView, TouchableOpacity} from 'react-native';

const arrow = require('../assets/screen_2/Arrow_Left.png');

const Screen3 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} activeOpacity={0.9}>
        <Image source={arrow} />
      </TouchableOpacity>

      <View style={styles.title}>
        <Text style={styles.titleText}>Sign Up</Text>
      </View>

      <View style={styles.body}>

        <View style={styles.inputbox}>
          <Text style={styles.inputLabel}>Username</Text>
          <TextInput style={styles.inputText} />
        </View>
        <View style={styles.seperater}></View>

        <View style={styles.inputbox}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput style={styles.inputText} />
        </View>
        <View style={styles.seperater}></View>

        <View style={styles.inputbox}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput style={styles.inputText} />
        </View>
        <View style={styles.seperater}></View>

        <View style={styles.remArea}>
          <Text style={styles.remText}>Remember me</Text>
          <Switch
            style={styles.remSwitch}
            trackColor={{false: '#34C759', true: '#34C759'}}
            thumbColor={true ? 'white' : '#34C759'}
            ios_backgroundColor="#34C759"
            value={true}
          />
        </View>

      </View>

      <View style={styles.createAccArea}>
        <Text style={styles.createAccText}>Sign Up</Text>
      </View>



    </SafeAreaView>
  );
};

export default Screen3;


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
      height: '70%',
      justifyContent: 'center',
      padding: 20,
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
    remArea: {
      marginTop: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
      // backgroundColor: 'red',
    },
    remText: {
      marginTop: 5,
    },
    remSwitch: {
      marginRight: -10,
      transform: [{ scaleX: .6 }, { scaleY: .6 }]
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
