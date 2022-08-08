import React, { useState } from 'react'
import { Text, StyleSheet, View, FlatList, Image, TextInput, Button  } from 'react-native'
import { paymentVD } from '../../global/Vendor/PaymentVendorDistributorData'
import { colors } from '../../global/Vendor/Styles'
import VendorHeader from '../../components/Vendor/VendorHeader'
import Modal from "react-native-modal";

export default function CreditDistributorsScreen({navigation}) {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };

    return (
        <View style={styles.container}>
            <VendorHeader navigate={navigation} />
            <View style={styles.textBarTab}>
                <Text style={styles.textTop}> Distributors At Udhar  </Text>
            </View>
            <View style={{flex:1,flexGrow:1}}>
            <FlatList
              style={{marginTop:10,marginBottom:10}}
              horizontal={false}
              showsVerticalScrollIndicator={true}
              data={paymentVD}
              keyExtractor={(item,index)=>index.toString()}
              renderItem={({item})=>(
                <View style={{marginRight:10}}>
                          <View style={styles.boxStyle}>
                          <View style={{flexDirection:'column'}}>
                                <Image
                                source={{uri:item.distributorDetails.dImg}}  
                                style={styles.imageStyle}
                                />
                                <Text style={styles.textBtnStyles}
                                    onPress={toggleModal}
                                >Make Payment</Text>
                                <Text style={styles.textBtnStyles}
                                    onPress={()=>navigation.navigate('CreditDistributorsPayScreen',{data:item})}
                                >View Payment</Text>

                        <View style={{ flex: 1,backgroundColor:colors.cardbackground}}>
                            <Modal isVisible={isModalVisible}>
                                    <View style={styles.modalView1}>
                                    <View style={{marginVertical:10,paddingVertical:10}}>
                                        <TextInput style={{borderWidth:2,borderRadius:10,borderColor:colors.buttons,padding:10,marginBottom:10,color:colors.grey1}} placeholder='Enter Amount Paid'/>
                                </View>
                                    <View style={{flexDirection:'row'}}>
                                        <View style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
                                            <Button title="Close" onPress={
                                                toggleModal} />
                                        </View>
                                        <View  style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
                                            <Button title='Save' />
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                        </View>

                        </View>
                            <View style={{marginLeft:5,borderLeftWidth:1,padding:5,borderColor:colors.buttons}}>
                            <Text style={styles.text2}>Name: </Text>
                            <Text style={styles.text1}>{item.distributorDetails.dname}</Text>
                            <Text style={styles.text2}>Mobile Number: </Text>
                            <Text style={styles.text1}>{item.distributorDetails.mobileno}</Text>
                            <Text style={styles.text2}>City: </Text>
                            <Text style={styles.text1}>{item.distributorDetails.dcity}</Text>
                            <Text style={styles.text2}>Amount Remaining: </Text>
                            <Text style={styles.text1}>{item.totalAmountRemaining}</Text>
                        </View>
                    </View>
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
      titleBar:{
        width:'100%',
        height:80,
        backgroundColor:colors.buttons,
        alignItems:'center',
        justifyContent:'center'
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
          fontSize:16,
          color:colors.grey1,
          paddingHorizontal:5
        },
        text2:{
          fontSize:16,
          color:colors.grey1,
          fontWeight:'bold',
          fontStyle:'italic'
        },
        textBtnStyles:{
            height:50,width:80,
            borderWidth:1,
            borderColor:colors.buttons,
            padding:5,margin:5,
            textAlign:'center',
            borderRadius:10,
            color:colors.grey1,
            fontWeight:'bold'
        },
        modalView1:{
            flex: .8,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:colors.grey5,
            borderRadius:30,
            paddingHorizontal:10
       }
})
