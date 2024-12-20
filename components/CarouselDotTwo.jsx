import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const CarouselDotTwo = ({}) => {
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

export default CarouselDotTwo

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
    backgroundColor:'white',
    borderRadius:hp('1%'),
    height:hp('1%'),
    width:wp('20%'),
    marginHorizontal:wp('2%')
  },

  dotThree:{
    backgroundColor:'black',
    borderRadius:hp('1%'),
    height:hp('1%'),
    width:wp('20%'),
    marginHorizontal:wp('2%')
  }

})