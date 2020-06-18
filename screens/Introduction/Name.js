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

export default function Name({navigation, route}) {
  const [name, setName] = useState('');
  const [invalidName, setInvalidName] = useState(false);

  const OnSubmitName = () => {
    navigation.navigate('DOB', {Name: name});
  };
  return (
    <Fragment>
      <SafeAreaView style={styles.mainContainer}>
        <LottieView
          source={require('../../assets/animations/Name.json')}
          autoPlay
          loop
          style={styles.animationOne}
        />

        <View style={styles.ContentDiv}>
          <Text style={styles.mainheading}>Lets Get to Know You Better !</Text>
          <Text style={styles.Subheading}>Starting with your full name</Text>
          <Text style={styles.hTwo}>Full Name</Text>

          <View style={styles.PhoneNumberInput}>
            <TextInput
              label="Name"
              value={name}
              onChangeText={(text) => setName(text)}
              underlineColor={'black'}
              selectionColor={'black'}
              style={{position: 'relative'}}
              theme={{
                colors: {
                  primary: '#5ca9af',
                  underlineColor: 'transparent',
                  background: 'white',
                },
              }}
            />
            <HelperText type="error" visible={invalidName} style={{height: 20}}>
              Name Is Invalid!
            </HelperText>
          </View>
          <View style={styles.supMargin}>
            <TouchableOpacity
              onPress={() => OnSubmitName()}
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
});
