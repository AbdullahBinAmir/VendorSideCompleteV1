import React from 'react'
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'
import { colors } from '../../global/Vendor/Styles'

export default function DistributorsDetails({route,navigation}) {

    const data=route.params;

//{id,name,email,mno,dstatus,sapaid,daddress}

    return (
      <ScrollView style={styles.container}>
        <View style={styles.titleBar}>
            <Text style={styles.titleBarText}>Distributor Details</Text>
        </View>
        <View style={styles.view2}>
        <View style={{alignItems:'center'}}>
            <Image
                source={{uri:data.dImg}}  
                style={{width: 80, height: 80, borderRadius: 40, borderColor:colors.grey2, borderWidth:1,marginRight:5}} 
            />
        </View>   
            <Text style={styles.text1}>Name: {data.name}</Text>
            <Text style={styles.text1}>Eamil: {data.email}</Text>
            <Text style={styles.text1}>Mobile No: {data.mno}</Text>
            <Text style={styles.text1}>Status: {data.dstatus}</Text>
            <Text style={styles.text1}>Security Paid: {data.sapaid}</Text>
            <Text style={styles.text1}>Address: {data.daddress}</Text>
        </View>
      </ScrollView>
    )
  }


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.cardbackground,
    },
    titleBar:{
        width:'100%',
        height:90,
        backgroundColor:colors.buttons,
        justifyContent:'center',
        alignItems:'center'
    },
    titleBarText:{
        fontSize:24,
        fontWeight:'bold',
        color:colors.cardbackground
    },
    view2:{
        margin:15,
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:25
    },
    text1:{
        fontSize:18,
        padding:5,
        color:colors.grey2,
        borderWidth:1,
        borderColor:colors.buttons,
        marginVertical:10,
        borderRadius:10
    }
})
