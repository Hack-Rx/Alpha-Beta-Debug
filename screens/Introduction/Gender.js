import React, {Fragment, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import {sub} from 'react-native-reanimated';

export default function Gender({navigation, route}) {
  const [gender, setGender] = useState('');
  const [invalidName, setInvalidName] = useState(false);
  const [genderColor, setGenderColor] = useState({
    male: 'grey',
    female: 'grey',
    trans: 'grey',
  });

  const onClickMale = () => {
    genderColor.male == 'grey'
      ? setGenderColor({male: '#9858bf', female: 'grey', trans: 'grey'})
      : setGenderColor({male: 'grey', female: 'grey', trans: 'grey'});
    setGender('Male');
  };
  const onClickFemale = () => {
    genderColor.female == 'grey'
      ? setGenderColor({male: 'grey', female: '#9858bf', trans: 'grey'})
      : setGenderColor({male: 'grey', female: 'grey', trans: 'grey'});
    setGender('Female');
  };
  const onClickTrans = () => {
    genderColor.trans == 'grey'
      ? setGenderColor({male: 'grey', female: 'grey', trans: '#9858bf'})
      : setGenderColor({male: 'grey', female: 'grey', trans: 'grey'});
    setGender('Transgender');
  };
  const OnSubmitGender = () => {
    navigation.navigate('FinalIntroduction', {
      Name: route.params.Name,
      Dob: route.params.Dob,
      Gender: gender,
    });
  };
  return (
    <Fragment>
      <SafeAreaView style={styles.mainContainer}>
        <LottieView
          source={require('../../assets/animations/gender.json')}
          autoPlay
          loop
          style={styles.animationOne}
        />

        <View style={styles.ContentDiv}>
          <Text style={styles.mainheading}>Alright ! Just One More Step.</Text>
          <Text style={styles.Subheading}>Can you specify your gender ?</Text>
          <Text style={styles.hTwo}>Gender</Text>

          <View style={styles.PhoneNumberInput}>
            <View style={styles.buttonview}>
              <TouchableOpacity
                style={{
                  height: responseHeight(5),
                  width: responseWidth(25),
                  backgroundColor: genderColor.male,
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => onClickMale()}>
                <Text style={styles.buttontext}>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: responseHeight(5),
                  width: responseWidth(25),
                  backgroundColor: genderColor.female,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => onClickFemale()}>
                <Text style={styles.buttontext}>Female</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: responseHeight(5),
                  width: responseWidth(25),
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                  alignItems: 'center',
                  backgroundColor: genderColor.trans,
                  justifyContent: 'center',
                }}
                onPress={() => onClickTrans()}>
                <Text style={styles.buttontext}>Trans</Text>
              </TouchableOpacity>
            </View>
            <HelperText type="error" visible={invalidName} style={{height: 20}}>
              Name Is Invalid!
            </HelperText>
          </View>
          <View style={styles.supMargin}>
            <TouchableOpacity
              onPress={() => OnSubmitGender()}
              style={styles.SubmitName}>
              <Text style={styles.SubmitNameText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
}

const responseHeight = (per) => {
  const screenHeight = Math.round(Dimensions.get('window').height);

  return (screenHeight / 100) * per;
};

const responseWidth = (per) => {
  const screenWidth = Math.round(Dimensions.get('window').width);

  return (screenWidth / 100) * per;
};

const resposeFont = (per) => {
  const screenHeight = Math.round(Dimensions.get('window').width);

  return (screenHeight / 100) * per;
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f5f5',
    flex: 1,
  },
  mainheading: {
    fontSize: responseWidth(8),
    fontFamily: 'NotoSansJP-Bold',
    color: '#9858bf',
  },
  Subheading: {
    marginBottom: responseHeight(4),
    color: 'grey',
    left: 0,
    fontFamily: 'NotoSansJP-Bold',
  },
  SubDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  ContentDiv: {
    //marginLeft: responseWidth(-3),
    padding: responseWidth(8),
  },
  hOne: {
    fontSize: responseWidth(8),
    fontFamily: 'NotoSansJP-Bold',
    color: '#f26673',
    marginBottom: 10,
    left: 0,
  },
  hTwo: {
    fontSize: responseWidth(5),
    fontFamily: 'NotoSansJP-Bold',
    textAlign: 'left',
    color: '#9858bf',
  },
  signinText: {
    fontSize: responseWidth(4.5),
    fontFamily: 'NotoSansJP-Bold',
    marginBottom: 10,
    color: '#f26673',
  },
  animationOne: {
    //position: 'relative',
    width: responseWidth(90),
    height: responseHeight(55),
  },
  PhoneNumberInput: {
    width: responseWidth(80),
    height: responseHeight(1),
    // borderColor: 'gray',
  },
  SubmitName: {
    width: responseWidth(80),
    //height: responseHeight(5),
    alignItems: 'center',
    padding: responseHeight(1),
    borderRadius: 20,
    backgroundColor: 'black',
  },
  SubmitNameText: {
    fontSize: responseWidth(4),
    color: 'white',
  },
  supMargin: {
    marginTop: responseHeight(9),
  },
  malebutton: {
    height: responseHeight(5),
    width: responseWidth(25),
    backgroundColor: 'grey',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext: {
    fontSize: responseWidth(4.5),
    color: 'white',
  },
  femalebutton: {
    height: responseHeight(5),
    width: responseWidth(25),
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  transbutton: {
    height: responseHeight(5),
    width: responseWidth(25),
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonview: {
    flexDirection: 'row',
    marginTop: responseHeight(1),
  },
});
