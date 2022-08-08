import React from 'react'
//import { Text, StyleSheet, View } from 'react-native'
import { colors } from '../../global/Vendor/Styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductScreen from '../../screens/Vendor/ProductScreen';
import ProductsManagerScreen from '../../screens/Vendor/ProductsManagerScreen';

const bottomTab = createBottomTabNavigator();

export default function VendorProductsBottomNav () {
    return (
        <bottomTab.Navigator
            screenOptions={{
                tabBarActiveTintColor:colors.buttons
            }}
        >
            <bottomTab.Screen name="Products" component={ProductScreen}
                    options={
                        {
                            tabBarLabel:"My Products",
                            tabBarIcon:({color,size})=>(
                                <Icon
                                    name='list' 
                                    color={color}
                                    size={size}
                                />
                            ),
                            headerShown:false
                        }
                    }
            />
            <bottomTab.Screen name="ManageProducts" component={ProductsManagerScreen}
                options={
                    {
                        tabBarLabel:"Add Products",
                        tabBarIcon:({color,size})=>(
                            <Icon
                                name='plus-circle' 
                                color={color}
                                size={size}
                            />
                        ),
                        headerShown:false
                    }
                }
            />
      </bottomTab.Navigator>
    )
  }

//const styles = StyleSheet.create({})
