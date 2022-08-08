import React from 'react'
import { Text, StyleSheet, View, FlatList, Dimensions} from 'react-native'
import { colors } from '../../global/Vendor/Styles'
//import Icon from 'react-native-vector-icons/FontAwesome'
import VendorProductCard from '../../components/Vendor/VendorProductCard'
import {vendorProduct} from '../../global/Vendor/VProductData'
import VendorHeader from '../../components/Vendor/VendorHeader'
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function ProductScreen({navigation}) {
    return (
      <View style={styles.container}>
                <VendorHeader navigate={navigation} />
                <View style={styles.textBarTab}>
                    <Text style={styles.textTop}>Your Products</Text>
                </View>
                <View style={{flex:1,flexGrow:1}}>
                    <FlatList
                        style={{marginTop:10,marginBottom:10}}
                        horizontal={false}
                        showsVerticalScrollIndicator={true}
                        data={vendorProduct}
                        keyExtractor={(item,index)=>index.toString()}
                        renderItem={({item})=>(
                        <View style={{marginRight:10}}>
                            <VendorProductCard
                                pid={item.pid}
                                screenWidth={SCREEN_WIDTH*0.9}
                                pname={item.pname}
                                quantityPerCarton={item.quantityPerCarton}
                                pricePerCarton={item.pricePerCarton}
                                purchasePriceDistributor={item.purchasePriceDistributor}
                                salePriceDistributor={item.salePriceDistributor}
                                no_Of_Carton={item.no_Of_Carton}
                                companyName={item.companyName}
                                thresholdToBuy={item.thresholdToBuy}
                                productCategory={item.productCategory}
                                productDescription={item.productDescription}
                                productImage={item.productImage}
                                toProductManager={navigation}
                            />  
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
    }
})
