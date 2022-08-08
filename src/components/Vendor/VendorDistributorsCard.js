import React, {useState} from 'react'
import { Text, TouchableOpacity, View, StyleSheet,Button, TextInput,Image } from 'react-native'
import { colors } from '../../global/Vendor/Styles';
import Modal from "react-native-modal";
import DropDownPicker from 'react-native-dropdown-picker';

export default function VendorDistributorsCard(
    {
        vdId,
        dname,
        demail,
        mobileno,
        dcity,
        distributionStatus,
        securityAmountPaid,
        distributorAddress,
        dImg,
        screenWidth,
        navigation
    }
) {

    const [isModalVisible, setModalVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'allowed', value: 'allowed'},
      {label: 'blocked', value: 'blocked'},
      {label: 'applied', value: 'applied'},
    ]);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };

    return (
      <TouchableOpacity  onPress={()=>{navigation.navigate('DistributorsDetails',{
        id:vdId,name:dname,email:demail,mno:mobileno,dstatus:distributionStatus,sapaid:securityAmountPaid,
        daddress:distributorAddress,dImg:dImg
  })}}>
        <View style={{...styles.boxStyle, width:screenWidth}}>
            <View style={styles.boxText}>
            <View style={{flexDirection:'row'}}>
                <Image
                    source={{uri:dImg}}  
                    style={{width: 80, height: 80, borderRadius: 40, borderColor:colors.grey2, borderWidth:1,marginRight:5}} 
                />
            <View>
               <Text style={styles.text1}>Name: {dname}</Text>
               <Text style={styles.text1}>City: {dcity}</Text>
               <Text style={styles.text1}>Status: {distributionStatus}</Text>
            </View>
            </View>
                <Text style={styles.text2} onPress={toggleModal} >Change Status</Text>
            </View>
            <View style={{ flex: 1,backgroundColor:colors.grey4}}>
                <Modal isVisible={isModalVisible}>
                    <View style={styles.modalView1}>
                    <View style={{marginVertical:10,paddingVertical:10}}>
                        <TextInput style={{borderWidth:2,borderRadius:10,padding:10,marginBottom:10,color:colors.grey1}} placeholder='Enter Security Paid'/>
                          <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            listMode="SCROLLVIEW"
                            dropDownDirection='TOP'
                          />
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
                            <Button title="Close" onPress={toggleModal} />
                        </View>
                        <View  style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
                            <Button title='Save' />
                        </View>
                    </View>
                    </View>
                </Modal>
            </View>
        </View>
      </TouchableOpacity>
    )
  }

const styles=StyleSheet.create({
    boxStyle:{
        flex:1,
        backgroundColor:colors.cardbackground,
        alignSelf:'center',
        marginVertical:10
    },
    boxText:{
        borderWidth:3,
        borderColor:colors.buttons,
        marginLeft:10,
        paddingHorizontal:10,
        paddingVertical:15,
        borderRadius:15
    },
    text1:{
        fontSize:16,
        color:colors.grey2,
        fontStyle:'italic'
    },
    text2:{
        color:colors.buttons,
        textDecorationLine:'underline',
        padding:10,
        fontSize:16,
        textAlign:'center',
        marginTop:5
    },
    modalView1:{
         flex: 1,
         alignItems:'center',
         justifyContent:'center',
         backgroundColor:colors.grey5,
         borderRadius:30,
         paddingHorizontal:10
    }
})