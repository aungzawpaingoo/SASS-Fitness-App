import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const CarouselDotThree = ({}) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.dotContainer}>
        
        <View style={styles.dot}><Text style={{color:''}}>.</Text></View>
        <View style={styles.dotTwo}><Text style={{color:''}}>.</Text></View>
        <View style={styles.dotThree}><Text style={{color:''}}>.</Text></View>

      </View>

    </View>
  )
}

export default CarouselDotThree

const styles = StyleSheet.create({
  container:{
    backgroundColor:'yellow',
    width:wp('100%'),
    marginTop:hp('10%'),
    marginBottom:hp('10%'),
  },

  dotContainer:{
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'center'
  },

  dot:{
    backgroundColor:'black',
    borderRadius:hp('1%'),
    height:hp('1%'),
    width:wp('20%'),
    marginHorizontal:wp('2%')
  },

  dotTwo:{
    backgroundColor:'black',
    borderRadius:hp('1%'),
    height:hp('1%'),
    width:wp('20%'),
    marginHorizontal:wp('2%')
  },

  dotThree:{
    backgroundColor:'white',
    borderRadius:hp('1%'),
    height:hp('1%'),
    width:wp('20%'),
    marginHorizontal:wp('2%')
  }

})