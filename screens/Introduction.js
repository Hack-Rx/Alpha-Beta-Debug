import React, {useState, Fragment} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';

export default function Introduction({navigation, route}) {
  return (
    <Fragment>
      <SafeAreaView style={styles.mainContainer}>
        <View>
          <Text style={styles.hOne}>Hi,</Text>
          <Button
            title={'Lets Get Started'}
            onPress={() => navigation.navigate('Name')}
          />
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
  SubDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  hOne: {
    fontSize: responseWidth(10),
    fontFamily: 'NotoSansJP-Bold',
    color: '#f26673',
    left: 0,
  },
  hTwo: {
    fontSize: responseWidth(5),
    fontFamily: 'NotoSansJP-Bold',
    textAlign: 'left',
    color: '#f26673',
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
  supMargin: {
    marginTop: responseHeight(10),
  },
});
