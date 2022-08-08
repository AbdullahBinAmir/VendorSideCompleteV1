import React from 'react'
//import { View} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CreditDistributorsScreen from '../../screens/Vendor/CreditDistribuorsScreen'
import CreditDistributorsPayScreen from '../../screens/Vendor/CreditDistributorsPayScreen'

const vdnavStack=createNativeStackNavigator()

export default function VendorCreditNav() {
    return (
      <vdnavStack.Navigator>
            <vdnavStack.Screen
                name='CreditDistributorsScreen'
                component={CreditDistributorsScreen}
                options={{headerShown:false}}
            />
            <vdnavStack.Screen
                name='CreditDistributorsPayScreen'
                component={CreditDistributorsPayScreen}
                options={{headerShown:false}}
            />
      </vdnavStack.Navigator>
    )
  }
