import React, {useState, Fragment, useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import LottieView from 'lottie-react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function FinalIntroduction({navigation, route}) {
  const {Name} = route.params;
  const {Dob} = route.params;
  const {Gender} = route.params;

  useEffect(() => {
    writingToFBase();
  }, []);

  const writingToFBase = () => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        firestore()
          .collection(user.uid)
          .doc('metaData')
          .set({
            name: Name,
            dob: Dob,
            gender: Gender,
          })
          .then(() => {
            console.log('User personal Details Added!');

            setTimeout(function () {
              navigation.navigate('Drawer');
            }, 3000);
          });
      } else {
        // User not logged in or has just logged out.
      }
    });
  };

  return (
    <Fragment>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.contentDiv}>
          <Text style={styles.hTwo}>You are all Set {Name}!</Text>
          <View style={styles.subInfoView}>
            <Text style={styles.paragraph}>
              Transfering all the details to Anandi (Our State-of-the-art
              Disease Diagnostic AI) to help you in times of need !
            </Text>
          </View>
        </View>

        <LottieView
          source={require('../../assets/animations/finalintro.json')}
          autoPlay
          loop
          style={styles.animationOne}
        />
        <Text style={{color: 'grey'}}>
          Redirecting to dashboard after transfer...
        </Text>
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
  contentDiv: {
    //marginLeft: responseWidth(-3),
    alignItems: 'center',
    justifyContent: 'center',
    padding: responseWidth(4),
  },
  subInfoView: {
    paddingTop: responseHeight(1),
    paddingRight: responseWidth(8),
    paddingLeft: responseWidth(8),
  },
  hOne: {
    fontSize: responseWidth(8),
    fontFamily: 'NotoSansJP-Bold',
    color: '#f26673',
    marginBottom: 10,
    left: 0,
  },
  hTwo: {
    fontSize: responseWidth(6),
    fontFamily: 'NotoSansJP-Bold',
    textAlign: 'left',
    color: '#34CACA',
  },
  animationOne: {
    //position: 'relative',
    marginTop: responseHeight(-5),
    width: responseWidth(90),
    height: responseHeight(55),
  },
  paragraph: {
    //fontSize: responseWidth(8),
    fontFamily: 'NotoSansJP-Bold',
    textAlign: 'justify',
  },
});
