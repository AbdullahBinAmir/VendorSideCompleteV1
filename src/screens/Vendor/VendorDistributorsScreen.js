import React from 'react'
import { Text, StyleSheet, View, FlatList, Dimensions } from 'react-native'
import VendorDistributorsCard from '../../components/Vendor/VendorDistributorsCard';
import VendorHeader from '../../components/Vendor/VendorHeader'
import { colors } from '../../global/Vendor/Styles'
import { vendorDistributors } from '../../global/Vendor/VDistributorsData';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function VendorDistributorsScreen({navigation}) {
    return (
      <View style={styles.container}>
            <VendorHeader navigate={navigation}/>
            <View style={styles.textBarTab}>
                <Text style={styles.textTop}>Your Distributors</Text>
            </View>
            <View style={{flex:1,flexGrow:1}}>
                <FlatList
                    style={{marginTop:10,marginBottom:10}}
                    horizontal={false}
                    showsVerticalScrollIndicator={true}
                    data={vendorDistributors}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem={({item})=>(
                    <View style={{marginRight:10}}>
                        <VendorDistributorsCard
                            screenWidth={SCREEN_WIDTH*0.9}
                            vdId={item.vdId}
                            dname={item.dname}
                            demail={item.demail}
                            mobileno={item.mobileno}
                            dcity={item.dcity}
                            distributionStatus={item.distributionStatus}
                            securityAmountPaid={item.securityAmountPaid}
                            distributorAddress={item.distributorAddress}
                            dImg={item.dImg}
                            navigation={navigation}
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
