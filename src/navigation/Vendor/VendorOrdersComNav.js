import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OrderDetailsScreen from '../../screens/Vendor/OrderDetailsScreen'
import CompletedOrdersScreen from '../../screens/Vendor/CompletedOrdersScreen'

const odnavStack=createNativeStackNavigator()

export default function OrderCompleteNav () {
    return (
      <odnavStack.Navigator>
            <odnavStack.Screen
                name='CompletedOrdersScreen'
                component={CompletedOrdersScreen}
                options={{headerShown:false}}
            />
            <odnavStack.Screen
                name='OrderDetailsScreen'
                component={OrderDetailsScreen}
                options={{headerShown:false}}
            />
      </odnavStack.Navigator>
    )
  }
