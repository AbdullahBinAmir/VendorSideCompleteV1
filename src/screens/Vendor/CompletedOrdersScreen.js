import React from 'react'
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity  } from 'react-native'
import VendorHeader from '../../components/Vendor/VendorHeader'
import { colors } from '../../global/Vendor/Styles'
import { orderData } from '../../global/Vendor/OrderData'


export default function OrdersScreen({navigation}) {
    return (
      <View style={styles.container}>
        <VendorHeader navigate={navigation}/>
        <View style={styles.textBarTab}>
            <Text style={styles.textTop}>My Orders</Text>
        </View>
        <View style={{flex:1,flexGrow:1}}>
            <FlatList
              style={{marginTop:10,marginBottom:10}}
              horizontal={false}
              showsVerticalScrollIndicator={true}
              data={orderData}
              keyExtractor={(item,index)=>index.toString()}
              renderItem={({item})=>(
                <View style={{marginRight:10}}>
                  {
                    item.oStatus=='complete'?(
                        <TouchableOpacity onPress={()=>navigation.navigate('OrderDetailsScreen',{data:item})}>
                          <View style={styles.boxStyle}>
                            <Image
                              source={{uri:item.distributorDetails.dImg}}  
                              style={styles.imageStyle} 
                            />
                            <View style={{marginLeft:5}}>
                              <Text style={styles.text1}>Name: {item.distributorDetails.dname}</Text>
                              <Text style={styles.text1}>Mobile: {item.distributorDetails.mobileno}</Text>
                              <Text style={styles.text1}>City: {item.distributorDetails.dcity}</Text>
                            </View>
                          </View>
                      </TouchableOpacity>):null
                  }
                </View>
              )}
            />
        </View>
      </View>
    )
  }


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.cardbackground
    },
    textTop:{
        fontSize:20,
        fontWeight:'bold',
        color:colors.buttons
    },
    textBarTab:{
        alignItems:'flex-start',
        justifyContent:'center',
        marginLeft:5,
        marginTop:15,
        marginBottom:10,
        height:50,
        backgroundColor:colors.grey5,
        padding:10,
        borderRadius:10
    },
    imageStyle:{
      width:80,
      height:80,
      borderRadius:40,
      borderColor:colors.grey1,
      borderWidth:1,
      marginRight:5
    },
    boxStyle:{
      flexDirection:'row',
      borderWidth:2,
      margin:10,
      paddingHorizontal:5,
      paddingVertical:10,
      borderColor:colors.buttons,
      borderRadius:10
    },
    text1:{
      fontSize:14,
      color:colors.grey1
    }
})
