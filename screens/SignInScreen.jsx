import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Button, Switch, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const SignUpScreen = () => {


  const navigation  = useNavigation();

  return ( 

    <SafeAreaView style={styles.container}>

    <TextInput
    placeholder='Full Name'
    mode='outlined'
    style={styles.textinput}/>

    <TextInput
    placeholder='Email Address'
    mode='outlined'
    style={styles.textinput}/>

    <TextInput
    placeholder='Password'
    mode='outlined'
    style={styles.textinput}
    secureTextEntry/>

    <View style={styles.passwordPolicy}>
      <Text style={styles.passWord}>Minimum of 8 characters and at least 3 of the{'\n'}following : lowercase letter, uppercase letter,{'\n'}number and special character.</Text>
    </View>

    <View style={styles.flex}>
     <Text style={styles.description}></Text>
    </View>


    <View style={styles.btnContainer}>
      <Button style={styles.btn} buttonColor='black' textColor='yellow' labelStyle={styles.btnText} mode='contained'>SIGN IN</Button>
    </View>


    </SafeAreaView>
  
)
}

export default SignUpScreen

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center'
  },

  textinput:{
    backgroundColor:'white',
    marginVertical:hp('1.4%'),
    width:wp('93%'),
  },

  passwordPolicy:{
    justifyContent:'center',
    backgroundColor:'white',
    paddingHorizontal:wp('1%'),
    width:wp('93%'),
    paddingVertical:hp('1%')   
  },

  passWord:{
    fontSize:hp('1.8%'),
    letterSpacing:wp('0.2%'),
    fontWeight:'400',
  },

  flex:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white',
    width:wp('93%'),
    paddingVertical:hp('2%'),
  },

  description:{
    fontSize:hp('1.8%')
  },

  btn:{
    width:wp('90%'),
    paddingVertical:hp('1%'),
    borderRadius:hp('0.7%')
  },

  btnText:{
   fontSize:hp('2%')
  },

  option:{
    fontSize:hp('2.1%'),
    fontWeight:'bold',
    paddingVertical:hp('1%')
  }

})