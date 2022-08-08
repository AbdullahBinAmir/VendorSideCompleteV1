import React, { useEffect } from 'react'
import { View ,StyleSheet ,StatusBar } from 'react-native'
import { colors } from './src/global/Vendor/Styles'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from './src/screens/SignInScreen'
import SignUPScreen from './src/screens/SignUPScreen'
//import ProductScreen from './src/screens/Vendor/ProductScreen';
import ProductsManagerScreen from './src/screens/Vendor/ProductsManagerScreen';
import VendorProductsBottomNav from './src/navigation/Vendor/VendorProductsBottomNav';
import VendorDrawer from './src/navigation/Vendor/VendorDrawer'

const navStack=createNativeStackNavigator()

export default function App() {

  useEffect(()=>{
      setTimeout(
        ()=>{
          SplashScreen.hide()
        },1000
      )
  })

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle= "light-content"
          backgroundColor={colors.statusBar}
        />
        <NavigationContainer>
            <navStack.Navigator>
               <navStack.Screen
                  name='SignInScreen'
                  component={SignInScreen}
                  options={{headerShown:false}}
               />
               <navStack.Screen
                name='SignUpScreen'
                component={SignUPScreen}
                options={{headerShown:false}}
              />
              <navStack.Screen
                  name='VendorDrawer'
                  component={VendorDrawer}
                  options={{headerShown:false}}
              />
              <navStack.Screen
                name='ProductsManagerScreen'
                component={ProductsManagerScreen}
                options={{headerShown:false}}
              />
            </navStack.Navigator>
        </NavigationContainer>
      </View>
    )
  }

const styles = StyleSheet.create({
    container:{flex:1}
})
