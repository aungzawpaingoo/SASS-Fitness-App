import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PagerView from 'react-native-pager-view';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import firstImage from '../assets/maleWorkout.webp';
import secondImage from '../assets/femaleWorkout.webp';
import thirdImage from '../assets/nutrition.jpeg';
import { Button } from 'react-native-paper';
import CarouselDotOne from './CarouselDotOne';
import CarouselDotTwo from './CarouselDotTwo';
import CarouselDotThree from './CarouselDotThree';
import { useNavigation } from '@react-navigation/native';

const OnboardingComponent = () => {

  const navigation = useNavigation();

  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      
      <View key="1" style={styles.page}>
        <View style={styles.imageContainer}>
          <Image source={firstImage} style={styles.image} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>WORKOUT & EXERCISES{'\n'}TRACKING</Text>
          <Text style={styles.description}>
            Choose from 1000's of workouts and{'\n'}100's of plans for every goal and level.
          </Text>
          <CarouselDotOne/>
          <Button labelStyle={styles.btnOne} textColor='black'>Already have sentry account?</Button>
          <Button labelStyle={styles.btnTwo} mode='contained' buttonColor='black' textColor='yellow' onPress={()=>navigation.navigate('SignInScreen')}>SIGN IN</Button>
        </View>
      </View>

      
      <View key="2" style={styles.page}>
        <View style={styles.imageContainer}>
          <Image source={secondImage}/>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>STEP-BY-STEP EXPERT{'\n'}INSTRUCTION</Text>
          <Text style={styles.description}>
            Detailed guidance to amplify results{'\n'}and get you noticed.
          </Text>
          <CarouselDotTwo/>
          <Button labelStyle={styles.btnOne} textColor='black'>Already have sentry account?</Button>
          <Button labelStyle={styles.btnTwo} mode='contained' buttonColor='black' textColor='yellow' onPress={()=>navigation.navigate('SignInScreen')}>SIGN IN</Button>
        </View>
      </View>

      
      <View key="3" style={styles.page}>
        <View style={styles.imageContainer}>
          <Image source={thirdImage} style={styles.image} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>NUTRITION & SUPPLEMENT{'\n'}GUIDANCE</Text>
          <Text style={styles.description}>
            Get targeted coaching on the right diet and supplementation to support your fitness goals.
          </Text>
          <CarouselDotThree/>
          <Button labelStyle={styles.btnOne} textColor='black'>Already have sentry account?</Button>
          <Button labelStyle={styles.btnTwo} mode='contained' buttonColor='black' textColor='yellow' onPress={()=>navigation.navigate('SignUpScreen')}>LET'S GET STARTED</Button>
        </View>
      </View>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },

  page: {
    flex: 1,
    backgroundColor: 'white',
  },

  imageContainer: {
    height: hp('40%'),
    width:wp('100%'),
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'white',
  },

  image: {
    width: wp('100%'), 
    height: hp('50%'), 
    resizeMode: 'cover',
  },

  textContainer: {
    height: hp('60%'),
    alignItems: 'center',
    backgroundColor:'yellow',
    paddingTop:hp('5%'),
  },

  title: {
    fontSize: hp('2.8%'),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: hp('2%'),
  },

  description: {
    paddingTop:hp('1.5%'),
    fontSize: hp('2%'),
    color: 'black',
    lineHeight:hp('3%'),
    textAlign: 'center',
  },

  btnOne:{
   fontSize:hp('2.1%'),
   marginBottom:hp('2%'),
  },

  btnTwo:{
    fontSize:hp('2.1%'),
    alignSelf:'center',
    width:wp('45%'),
    padding:hp('0.2%'),
  }

});

export default OnboardingComponent;
