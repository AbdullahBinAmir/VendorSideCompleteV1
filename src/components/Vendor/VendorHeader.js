import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { colors } from '../../global/Vendor/Styles'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function VendorHeader({navigate}) {
    return (
        <View style={styles.titleBar}>
            <View style={{flex:.2,marginLeft:10,padding:10}}>
                <Icon
                name='navicon' 
                color={colors.cardbackground}
                size={30}
                onPress={()=>{
                    navigate.toggleDrawer()
                }}
                />   
            </View>
            <View style={{flex:.8,}}>
                <Text style={styles.titleText}>Vendor Dashboard</Text>
            </View>
        </View>
    )
  }

const styles = StyleSheet.create({
    titleBar:{
        width:'100%',
        height:80,
        backgroundColor:colors.buttons,
        flexDirection:'row',
        alignItems:'center'
    },
    titleText:{
        fontSize:20,
        fontWeight:'bold',
        color:colors.cardbackground
    }
})
