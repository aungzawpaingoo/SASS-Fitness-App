import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import OnboardingComponent from '../components/OnboardingComponent';

const OnboardingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      
    <OnboardingComponent/>

    </SafeAreaView>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:'white',
  },

  

})