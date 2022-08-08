import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, TextInput,ScrollView,
   TouchableWithoutFeedback, TouchableOpacity, Keyboard, KeyboardAvoidingView, Button, Image } from 'react-native';
import { colors } from '../../global/Vendor/Styles';
import {launchImageLibrary} from 'react-native-image-picker';
import avatarImage from '../../assets/productAvatar.png'
import DropDownPicker from 'react-native-dropdown-picker';


export default function ProductsManagerScreen({route,navigation}) {

  useEffect(()=>{
      if(data){assignData()}
  })

  const options={
      title:'Select Image',
      type:'library',
      options:{
        maxHeight:200,
        maxWidth:200,
        selectionLimit:1,
        mediaType:'photo',
        includeBase64:false
      }
   }
    
    const data=route.params;
   // console.log(JSON.stringify(data))

  const openGallery=async ()=>{
      const result=await launchImageLibrary(options)
      setImagesrc(result.assets[0].uri)
      console.log(result)
  }

  const [imgsrc,setImagesrc]=useState(Image.resolveAssetSource(avatarImage).uri)
  const [name,setName]=useState('')
  const [quantityPerCarton,setQuantityPerCarton]=useState('')
  const [pricePerCarton,setPricePerCarton]=useState('')
  const [purchasePriceDistributor,setPurchasePriceDistributor]=useState('')
  const [salePriceDistributor,setSalePriceDistributor]=useState('')
  const [no_Of_Carton,setNo_Of_Carton]=useState('')
  const [thresholdToBuy,setThresholdToBuy]=useState('')
  const [productDescription,setProductDescription]=useState('')  

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'drinks', value: 'Drinks'},
    {label: 'snacks', value: 'Snacks'},
    {label: 'dairy', value: 'Dairy'},
    {label: 'cosmetics', value: 'Cosmetics'},
  ]);

  const assignData=()=>{
    console.log(data)
      setImagesrc(data.pImg)
      setName(data.prname)
      setQuantityPerCarton(data.qtyCarton.toString())
      setPricePerCarton(data.priceCarton.toString())
      setPurchasePriceDistributor(data.ppd.toString())
      setSalePriceDistributor(data.spd.toString())
      setNo_Of_Carton(data.nCartons)
      setThresholdToBuy(data.threshold.toString())
      setProductDescription(data.pdesp)
      setValue(data.pcat)
  }

    return (

      <KeyboardAvoidingView style={styles.container} behavior={'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.titleBar}>
                <Text style={styles.titleBarText}>{data?'Upadate Products':'Add New Product'}</Text>
            </View>
            <View style={{margin:10,justifyContent:'center',alignItems:'center'}}>
                <Image source={{uri:imgsrc}} style={{width:100,height:100}}/>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
                <Button title='upload image' onPress={openGallery}/>
            </View>
            <View style={styles.textInputView}>
                <TextInput  placeholderTextColor={colors.grey2}
                  style={styles.textInput} placeholder='Enter Product Name'
                    value={name} onChangeText={(t)=>setName(t)}
                />
                <TextInput  placeholderTextColor={colors.grey2}
                  style={styles.textInput} placeholder='Quantity Per Carton' keyboardType='number-pad'
                    value={quantityPerCarton} onChangeText={(t)=>setQuantityPerCarton(t)}
                />
                <TextInput  placeholderTextColor={colors.grey2}
                  style={styles.textInput} placeholder='Price Per Carton' keyboardType='number-pad'
                    value={pricePerCarton} onChangeText={(t)=>setPricePerCarton(t)}
                />
                <TextInput  placeholderTextColor={colors.grey2}
                  style={styles.textInput} placeholder='Purchase Price for distributor' keyboardType='number-pad'
                    value={purchasePriceDistributor} onChangeText={(t)=>setPurchasePriceDistributor(t)}
                />
                <TextInput  placeholderTextColor={colors.grey2}
                style={styles.textInput} placeholder='Sale Price for distributor' keyboardType='number-pad'
                  value={salePriceDistributor} onChangeText={(t)=>setSalePriceDistributor(t)}
                />
                <TextInput  placeholderTextColor={colors.grey2}
                style={styles.textInput} placeholder='Number of Cartons' keyboardType='number-pad'
                  value={no_Of_Carton} onChangeText={(t)=>setNo_Of_Carton(t)}
                />
                <TextInput  placeholderTextColor={colors.grey2}
                style={styles.textInput} placeholder='Minimum Puchase limit' keyboardType='number-pad'
                  value={thresholdToBuy} onChangeText={(t)=>setThresholdToBuy(t)}
                />
                <View style={styles.dropdown}>
                  <Text style={styles.titleText}>Please select product category</Text>
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
                <TextInput
                    style={{...styles.textInput,paddingVertical:20,borderRadius:5}} placeholder='Enter Product Description'  placeholderTextColor={colors.grey2}
                    value={productDescription} onChangeText={(t)=>setProductDescription(t)} multiline={true}
                />
            </View>
            {
              data?(
                <View style={{alignItems:'center',justifyContent:'center',marginHorizontal:15,marginVertical:5,marginBottom:25}}>
                  <TouchableOpacity style={styles.sButton} onPress={()=>{console.log('Update')}}>
                    <Text style={styles.btnText}>Update Product</Text>
                  </TouchableOpacity>
                </View>
              ):
              (
                <View style={{alignItems:'center',justifyContent:'center',marginHorizontal:15,marginVertical:5,marginBottom:25}}>
                  <TouchableOpacity style={styles.sButton} onPress={()=>{console.log('Sign IN')}}>
                    <Text style={styles.btnText}>Add Product</Text>
                  </TouchableOpacity>
                </View>
              )
            }
          </ScrollView>
        </TouchableWithoutFeedback>  
      </KeyboardAvoidingView>
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
    textInputView:{
        margin:10,
        justifyContent:'center'
    },
    textInput:{
        borderWidth:1,
        borderColor:colors.buttons,
        padding:10,
        margin:10,
        borderRadius:25,
        color:'black',
        fontSize:16,
    },
    dropdown:{
      padding:10,
      margin:10,
      borderRadius:25,
      color:'black',
      fontSize:16,
  },
    sButton:{
        width:'100%',
        height:60,
        backgroundColor:colors.buttons,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    },
    btnText:{
        fontSize:18,
        fontWeight:'bold',
        color:colors.cardbackground
    },
    signin:{
        alignItems:'flex-end',
        margin:10
    },
    signinText:{
        textDecorationLine:'underline',
        color:colors.grey1,
        fontSize:16
    },
    titleText:{
      fontSize:16,
      color:colors.buttons,
      padding:10
  }
})
