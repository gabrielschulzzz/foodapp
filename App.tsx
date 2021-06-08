import React from 'react';
import { ThemeProvider } from 'styled-components'
import theme from './src/global/styles/theme'
import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes';
import { NavigationContainer } from '@react-navigation/native'

import {
  useFonts,
  Oxygen_400Regular,
  Oxygen_700Bold
} from '@expo-google-fonts/oxygen'

import {
  NotoSerif_400Regular,
  NotoSerif_700Bold
} from '@expo-google-fonts/noto-serif'

export default function App() {
  const [fontsLoaded ] = useFonts({
    Oxygen_400Regular,
    Oxygen_700Bold, 
    NotoSerif_400Regular,
    NotoSerif_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading />
 }

  return (
    <ThemeProvider theme={theme}>
        <Routes />
    </ThemeProvider>
  )
}
