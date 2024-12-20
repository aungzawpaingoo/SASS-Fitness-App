import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TextInput, Button, Card, Title, Paragraph } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PieChart } from 'react-native-chart-kit';

const BodyMassIndex = () => {
  const [weight, setWeight] = useState('');
  const [heightFeet, setHeightFeet] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');
  const [protein, setProtein] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fats, setFats] = useState(0);
  const [calories, setCalories] = useState(0);
  const [calculated, setCalculated] = useState(false);

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const feetNum = parseInt(heightFeet);
    const inchesNum = parseInt(heightInches);
    const ageNum = parseInt(age);

    if (!weightNum || !feetNum || isNaN(inchesNum) || !ageNum || !gender) {
      alert('Please enter valid weight, height (feet and inches), age, and gender.');
      return;
    }

    const totalHeightInches = feetNum * 12 + inchesNum;
    const bmiValue = ((weightNum / (totalHeightInches * totalHeightInches)) * 703).toFixed(2);
    setBMI(bmiValue);

    let categoryText = '';
    if (bmiValue < 18.5) categoryText = 'Underweight';
    else if (bmiValue >= 18.5 && bmiValue < 24.9) categoryText = 'Normal weight';
    else if (bmiValue >= 25 && bmiValue < 29.9) categoryText = 'Overweight';
    else categoryText = 'Obesity';

    setCategory(categoryText);

    const calculatedMacros = calculateMacros(weightNum, categoryText, gender, ageNum);
    setProtein(calculatedMacros.protein);
    setCarbs(calculatedMacros.carbs);
    setFats(calculatedMacros.fats);
    setCalories(calculatedMacros.calories);
    setCalculated(true);
  };

  const calculateMacros = (weight, category, gender, age) => {
    let calories = 0;
    const heightInCm = (parseInt(heightFeet) * 30.48 + parseInt(heightInches) * 2.54);

    let bmr = 0;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * heightInCm - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * heightInCm - 5 * age - 161;
    }

    let tdee = bmr * 1.2;

    switch (category) {
      case 'Underweight':
        calories = weight * 16;
        break;
      case 'Normal weight':
        calories = weight * 14;
        break;
      case 'Overweight':
        calories = weight * 12;
        break;
      case 'Obesity':
        calories = weight * 10;
        break;
    }

    calories = Math.max(calories, tdee);

    const protein = weight;
    const carbs = (calories * 0.4) / 4;
    const fats = (calories * 0.3) / 9;

    return { protein: protein.toFixed(1), carbs: carbs.toFixed(1), fats: fats.toFixed(1), calories: calories.toFixed(1) };
  };

  const reset = () => {
    setWeight('');
    setHeightFeet('');
    setHeightInches('');
    setAge('');
    setGender('male');
    setBMI(null);
    setCategory('');
    setProtein(0);
    setCarbs(0);
    setFats(0);
    setCalories(0);
    setCalculated(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {!calculated ? (
        <ScrollView>
          <Title style={styles.title}>Body Mass Index Checker</Title>

          <Text style={styles.desciption}>Accurately calculate daily calories required for weight loss, weight gain or maintenance.</Text>

          <TextInput
            label="Weight (lbs)"
            value={weight}
            onChangeText={(text) => setWeight(text)}
            keyboardType="numeric"
            outlineColor='black'
            activeOutlineColor='black'
            mode="outlined"
            style={styles.input}
          />

          <View style={styles.row}>
            <TextInput
              label="Height (feet)"
              value={heightFeet}
              onChangeText={(text) => setHeightFeet(text)}
              keyboardType="numeric"
              outlineColor='black'
              activeOutlineColor='black'
              mode="outlined"
              style={styles.inputSmall}
            />
            <TextInput
              label="Height (inches)"
              value={heightInches}
              onChangeText={(text) => setHeightInches(text)}
              keyboardType="numeric"
              outlineColor='black'
              activeOutlineColor='black'
              mode="outlined"
              style={styles.inputSmall}
            />
          </View>

          <TextInput
            label="Age"
            value={age}
            onChangeText={(text) => setAge(text)}
            keyboardType="numeric"
            activeOutlineColor='black'
            outlineColor='black'
            mode="outlined"
            style={styles.input}
          />

          <View style={styles.genderSelection}>
            <Button
              icon={() => <MaterialCommunityIcons name="gender-male" size={24} color="yellow" />}
              mode="contained"
              textColor='yellow'
              onPress={() => setGender('male')}
              style={[styles.genderButton, gender === 'male' && styles.selectedGender]}
            >
              Male
            </Button>
            <Button
              icon={() => <MaterialCommunityIcons name="gender-female" size={24} color="yellow" />}
              mode="contained"
              textColor='yellow'
              onPress={() => setGender('female')}
              style={[styles.genderButton, gender === 'female' && styles.selectedGender]}
            >
              Female
            </Button>
          </View>

          <Button mode="contained" onPress={calculateBMI} style={styles.button}>
            Calculate BMI
          </Button>
        </ScrollView>
      ) : (
        <ScrollView>
          <Title style={styles.title}>Your BMI Results</Title>

          <PieChart
            data={[
              {
                name: 'Protein',
                population: parseFloat(protein),
                color: '#ff6347',
                legendFontColor: '#000',
                legendFontSize: 15,
              },
              {
                name: 'Carbs',
                population: parseFloat(carbs),
                color: '#32cd32',
                legendFontColor: '#000',
                legendFontSize: 15,
              },
              {
                name: 'Fats',
                population: parseFloat(fats),
                color: '#ffa500',
                legendFontColor: '#000',
                legendFontSize: 15,
              },
            ]}
            width={wp('90%')}
            height={220}
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              decimalPlaces: 1,
              color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
              style: { borderRadius: 16 },
            }}
            accessor="population"
            backgroundColor="transparent"
            style={styles.chart}
          />

          <Card style={styles.resultCard}>
            <Card.Content>
              <Paragraph>BMI: {bmi}</Paragraph>
              <Paragraph>Category: {category}</Paragraph>
              <Paragraph>Calories: {calories} kcal/day</Paragraph>
              <Paragraph>Protein: {protein}g/day</Paragraph>
              <Paragraph>Carbs: {carbs}g/day</Paragraph>
              <Paragraph>Fats: {fats}g/day</Paragraph>
              <Button mode="contained" onPress={reset} style={styles.resetButton}>
                Reset
              </Button>
            </Card.Content>
          </Card>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: hp('2%'),
  },
  title: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: hp('2%'),
  },
  desciption: {
    marginBottom: hp('5%'),
  },
  input: {
    marginBottom: hp('2%'),
    height: hp('7%'),
    backgroundColor: 'white',
  },
  inputSmall: {
    flex: 1,
    width: wp('45%'),
    height: hp('7%'),
    marginHorizontal: '0.5%',
    marginBottom: hp('2%'),
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
  },
  genderSelection: {
    flexDirection: 'row',
    marginVertical: hp('2%'),
    justifyContent: 'space-between',
  },
  genderButton: {
    width: wp('40%'),
    height: hp('7%'),
    justifyContent: 'center',
    backgroundColor: '#1E3E62',
    elevation:4,
    borderRadius: 8,
  },
  selectedGender: {
    backgroundColor: 'black',
  },
  button: {
    marginTop: hp('2%'),
    padding: hp('0.5%'),
  },
  chart: {
    marginTop: hp('3%'),
  },
  resultCard: {
    marginTop: hp('3%'),
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
  },
  resetButton: {
    marginTop: hp('2%'),
    backgroundColor: '#6200ea',
  },
});

export default BodyMassIndex;
