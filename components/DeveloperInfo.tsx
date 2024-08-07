// components/DeveloperInfo.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {  FontAwesome,MaterialIcons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

const openURL = async (url:string) => {
  await WebBrowser.openBrowserAsync(url);
};

const DeveloperInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Desenvolvido por: Dhmeson & Douglas</Text>
      <View style={styles.iconsContainer}>
       
        <TouchableOpacity onPress={() => openURL('https://github.com/Dhmeson')}>
          <FontAwesome name="github" size={30} color="#333" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openURL('mailto:dhmesonaraujo123@gmail.com')}>
          <MaterialIcons name="email" size={30} color="#404040" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  icon: {
    margin: 10,
  },
});

export default DeveloperInfo;
