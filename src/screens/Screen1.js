import React from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity, SafeAreaView} from 'react-native';

const back_gd_image = require('../assets/screen_1/screen_1.png');

const Screen1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={back_gd_image} resizeMode="cover" style={styles.image}>
        <View style={styles.setup_1_popup}>
          <Text style={styles.header}>Look Good, Feel Good</Text>
          <Text style={styles.desText}>Create your individual & unique style and look amazing everyday.</Text>
          <View style={styles.buttonPallet}>
            <TouchableOpacity style={[styles.buttonStyle, {backgroundColor: '#F5F6FA'}]} activeOpacity={0.9}>
              <Text style={[styles.buttonText, {color: '#8F959E'}]}>Men</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonStyle, {backgroundColor: '#9775FA'}]} activeOpacity={0.9}>
              <Text style={[styles.buttonText, {color: 'white'}]}>Women</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.skipButtonArea}>
            <View style={styles.skipButtonView}>
              <Text style={styles.skipButton}>Skip</Text>
            </View>

          </View>
        </View>
      </ImageBackground>

    </SafeAreaView>
  );
};

export default Screen1;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#9775FA',
    },
    image: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    setup_1_popup: {
      width: '90%',
      height: 220,
      // marginBottom: 50,
      borderRadius: 15,
      backgroundColor: 'white',
      alignItems: 'center',
      padding: 20,
      paddingLeft: 30,
      paddingRight: 30,
    },
    header: {
      textAlign: 'center',
      fontSize: 21,
      fontWeight: '500',
      marginBottom: 10,
    },
    desText: {
      textAlign: 'center',
      marginBottom: 10,
      color: '#8F959E',
    },
    buttonPallet: {
      // flex: 1,
      flexDirection: 'row',
    },
    buttonStyle: {
      margin: 5,
      width: '50%',
      height: 55,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 15,
    },
    skipButtonArea: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10
    },
    skipButtonView: {

    },
    skipButton: {
      color: '#8F959E',
    }



});
