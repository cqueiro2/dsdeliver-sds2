import  AppLoading  from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { useFonts, OpenSans_400Regular,OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import React from 'react';
import { StyleSheet, View } from 'react-native';



import Router from './src/Router';

export default function App() {
    let [fontsLoaded] = useFonts({
      OpenSans_400Regular,
      OpenSans_700Bold
    })
    if(!fontsLoaded) {
        return <AppLoading/>
    }
  return (
    <View style={styles.container}> 
      
      <StatusBar style="auto" />
      <Router/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
