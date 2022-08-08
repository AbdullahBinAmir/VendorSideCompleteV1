import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput,ScrollView,
   TouchableWithoutFeedback, TouchableOpacity, Keyboard, KeyboardAvoidingView, Button, Image } from 'react-native';
import { colors } from '../global/Vendor/Styles';
import {launchImageLibrary} from 'react-native-image-picker';
import avatarImage from '../assets/avatar.png'
import DropDownPicker from 'react-native-dropdown-picker';


export default function SignUPScreen({navigation}) {

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

  const openGallery=async ()=>{
      const result=await launchImageLibrary(options)
      setImagesrc(result.assets[0].uri)
      console.log(result)
  }

  const [imgsrc,setImagesrc]=useState(Image.resolveAssetSource(avatarImage).uri)
  const [name,setName]=useState('')
  const [emailAddress,setEmailAddress]=useState('')
  const [password,setPassword]=useState('')
  const [mno,setMno]=useState('')
  const [city,setCity]=useState('')
  const [baddress,setBAddress]=useState('')

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'vendor', value: 'Vendor'},
    {label: 'distributor', value: 'Distributor'},
    {label: 'shopkeeper', value: 'ShopKeeper'}
  ]);

    return (

      <KeyboardAvoidingView style={styles.container} behavior={'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.titleBar}>
                <Text style={styles.titleBarText}>Registration Form</Text>
            </View>
            <View style={{margin:10,justifyContent:'center',alignItems:'center'}}>
                <Image source={{uri:imgsrc}} style={{width:100,height:100}}/>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
                <Button title='upload image' onPress={openGallery}/>
            </View>
            <View style={styles.textInputView}>
                <TextInput  placeholderTextColor={colors.grey2}
                  style={styles.textInput} placeholder='Enter Your Name' keyboardType='name-phone-pad'
                    value={name} onChangeText={(t)=>setName(t)}
                />
                <TextInput  placeholderTextColor={colors.grey2}
                  style={styles.textInput} placeholder='Enter Email Address' keyboardType='email-address'
                    value={emailAddress} onChangeText={(t)=>setEmailAddress(t)}
                />
                <TextInput  placeholderTextColor={colors.grey2}
                  style={styles.textInput} placeholder='Enter Mobile Number' keyboardType='number-pad'
                    value={mno} onChangeText={(t)=>setMno(t)}
                />
                <TextInput  placeholderTextColor={colors.grey2}
                  style={styles.textInput} placeholder='Enter City' keyboardType='name-phone-pad'
                    value={city} onChangeText={(t)=>setCity(t)}
                 />
                 <TextInput
                    style={styles.textInput} placeholder='Enter Business Address'  placeholderTextColor={colors.grey2}
                  value={baddress} onChangeText={(t)=>setBAddress(t)} keyboardType='name-phone-pad'
                  />
                <TextInput style={styles.textInput} placeholder='Enter Password'  placeholderTextColor={colors.grey2}
                    value={password} onChangeText={(t)=>setPassword(t)} keyboardType='default'
                />
                <View style={styles.dropdown}>
                  <Text style={styles.titleText}>Which describes You Best ?</Text>
                    <DropDownPicker
                      open={open}
                      value={value}
                      items={items}
                      setOpen={setOpen}
                      setValue={setValue}
                      setItems={setItems}
                      listMode="SCROLLVIEW"
                    />
                </View>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginHorizontal:15,marginVertical:5}}>
              <TouchableOpacity style={styles.sButton} onPress={()=>{console.log('Register')}}>
                <Text style={styles.btnText}>Sign UP</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{...styles.signin,marginVertical:25,padding:10}}
                onPress={()=>navigation.goBack()}
            >
                  <Text style={styles.signinText}>Login</Text>
            </TouchableOpacity>
          </ScrollView>
        </TouchableWithoutFeedback>  
      </KeyboardAvoidingView>
    )
  }

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.cardbackground
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
        alignItems:'center',
        margin:10,
        borderWidth:2,
        borderColor:colors.buttons,
        borderRadius:15,
        marginHorizontal:25,
        margin:10
    },
    signinText:{
        color:colors.buttons,
        fontSize:18,
        fontWeight:'bold'
    },
    titleText:{
      fontSize:16,
      color:colors.buttons,
      padding:10
  }
})
