import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput,ScrollView,
   TouchableWithoutFeedback, TouchableOpacity, Keyboard, KeyboardAvoidingView } from 'react-native'
import { colors } from '../global/Vendor/Styles'

export default function SignInScreen({navigation}) {

  const [passView,setPassView]=useState(true)
  const [passText,setPassText]=useState('Show')
  const [emailAddress,setEmailAddress]=useState('')
  const [password,setPassword]=useState('')

    return (
      <KeyboardAvoidingView style={styles.container} behavior={'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={styles.titleBar}>
                <Text style={styles.titleBarText}>Welcome</Text>
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>Sign-IN</Text>
            </View>
            <View style={styles.textInputView}>
                <TextInput style={styles.textInput} placeholder='Enter Email Address' keyboardType='email-address'
                  placeholderTextColor={colors.grey2} value={emailAddress} onChangeText={(t)=>setEmailAddress(t)}
                />
                <TextInput style={styles.textInput} placeholder='Enter Password'  secureTextEntry={passView}
                placeholderTextColor={colors.grey2} value={password} onChangeText={(t)=>setPassword(t)}
                />
            </View>
            <View style={styles.textInputView}>
                <Text style={{marginHorizontal:20,color:colors.buttons,textDecorationLine:'underline'}}
                   onPress={()=>{
                    passView?setPassText('Hide'):setPassText('Show')
                    setPassView(!passView)
                  }}
                >
                    {passText} Password
                </Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginHorizontal:15,marginVertical:10}}>
              <TouchableOpacity style={styles.sButton} onPress={()=>{navigation.navigate('VendorDrawer')}}>
                    <Text style={styles.btnText}>Sign IN</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.signup}
                onPress={()=>navigation.navigate('SignUpScreen')}
            >
                  <Text style={{...styles.signupText,padding:10}}>Register</Text>
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
    title:{
        marginHorizontal:20,
        marginVertical:15
    },
    titleText:{
        fontSize:20,
        color:colors.buttons
    },
    textInputView:{
        margin:10,
        justifyContent:'center'
    },
    textInput:{
        borderWidth:1,
        borderColor:colors.buttons,
        padding:15,
        margin:10,
        borderRadius:25,
        color:'black',
        fontSize:16
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
    signup:{
        alignItems:'center',
        margin:10,
        borderWidth:2,
        borderColor:colors.buttons,
        borderRadius:15,
        marginHorizontal:25
    },
    signupText:{
        color:colors.buttons,
        fontSize:18,
        fontWeight:'bold'
    }
})
