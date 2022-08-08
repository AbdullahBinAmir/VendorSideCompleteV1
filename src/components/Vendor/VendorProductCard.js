import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native'
import { colors } from '../../global/Vendor/Styles'

export default function VendorProductCard(
    {
        pid,
        pname,
        quantityPerCarton,
        pricePerCarton,
        purchasePriceDistributor,
        salePriceDistributor,
        no_Of_Carton,
        companyName,
        thresholdToBuy,
        productCategory,
        productDescription,
        productImage,
        screenWidth,
        toProductManager,
    }
) {

    const data={
            id:pid,prname:pname,qtyCarton:quantityPerCarton,priceCarton:pricePerCarton,nCartons:no_Of_Carton,
            ppd:purchasePriceDistributor,spd:salePriceDistributor,threshold:thresholdToBuy,
            pcat:productCategory,pdesp:productDescription,pImg:productImage
    }

    return (
        <TouchableOpacity onPress={()=>{toProductManager.navigate('ProductsManagerScreen',{
            prid:pid.toString(),prname:pname,qtyCarton:quantityPerCarton,priceCarton:pricePerCarton,
            ppd:purchasePriceDistributor,spd:salePriceDistributor,threshold:thresholdToBuy,
            pcat:productCategory,pdesp:productDescription,pImg:productImage
        })}}>
            <View style={{...styles.cardView,width:screenWidth}}>
                <View style={{flex:7,borderBottomWidth:2,borderColor:colors.grey4,height:150}}>
                    <Image
                        resizeMode='cover'
                        source={{uri:productImage}}
                        style={{flex:1,height:150}}
                    />
                </View>
                <View style={{flex:3,marginLeft:5,marginTop:5,padding:5}}>
                    <Text style={styles.textStyle}>Name: {pname}</Text>
                    <Text style={styles.textStyle}>Qty Per Carton: {quantityPerCarton}</Text>
                    <Text style={styles.textStyle}>Qty In Stock: {no_Of_Carton}</Text>
                    <Text style={styles.textStyle}>Price Per Carton: {pricePerCarton}</Text>
                    <Text style={styles.textStyle}>Minimun Threshold: {thresholdToBuy}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
  }

const styles = StyleSheet.create({
    cardView:{
        flex:1,
        borderWidth:1,
        marginHorizontal:10,
        marginVertical:10,
        borderRadius:5,
        borderColor:colors.grey4,
        marginLeft:15
    },
    imageView:{
            justifyContent:'center',
            backgroundColor:'#ffff'
    },
    textStyle:{
        color:colors.grey2,
        fontSize:14
    }
})
