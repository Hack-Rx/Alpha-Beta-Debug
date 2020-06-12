import React, {useState, Fragment} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import LottieView from 'lottie-react-native';
import {HelperText, TextInput} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function LoginScreen() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('+91');
  const [invalidPhoneNumber, setInvalidPhoneNumber] = useState(false);
  const [invalidConfirmationCode, setInvalidConfirmationCode] = useState(false);
  const [code, setCode] = useState('');

  const OnSignup = () => {
    if (phoneNumber.length === 13) {
      setInvalidPhoneNumber(false);
      signInWithPhoneNumber();
    } else {
      setInvalidPhoneNumber(true);
      console.log(invalidPhoneNumber);
    }
  };

  // Handle the button press
  async function signInWithPhoneNumber() {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
      setInvalidConfirmationCode(true);
    }
  }

  if (!confirm) {
    return (
      <Fragment>
        <SafeAreaView style={styles.mainContainer}>
          <View style={styles.SubDiv}>
            <View style={{width: '100%', marginLeft: -70, marginTop: 40}}>
              <Text style={styles.hOne}>Lets Get You Into</Text>
              <Text style={styles.hTwo}>Safe Hand !</Text>
            </View>
            <LottieView
              source={require('../assets/animations/loginOne.json')}
              autoPlay
              loop
              style={styles.animationOne}
            />
            <View style={{position: 'relative'}}>
              <Text style={styles.signinText}>Sign In with your phone</Text>
              <View style={styles.PhoneNumberInput}>
                <TextInput
                  label="Phone Number"
                  value={phoneNumber}
                  onChangeText={(text) => setPhoneNumber(text)}
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
                <HelperText
                  type="error"
                  visible={invalidPhoneNumber}
                  style={{height: 20}}>
                  Phone Number Is Invalid!
                </HelperText>
              </View>
            </View>
          </View>
          <View style={styles.supMargin}>
            <TouchableOpacity
              onPress={() => OnSignup()}
              style={styles.submitPhoneNo}>
              <Text style={styles.submitphoneNoText}>SignIn</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.SubDiv}>
          <View style={{width: '100%', marginLeft: -70, marginTop: 40}}>
            <Text style={styles.hOne}>Lets Get You Into</Text>
            <Text style={styles.hTwo}>Safe Hand !</Text>
          </View>
          <LottieView
            source={require('../assets/animations/loginOne.json')}
            autoPlay
            loop
            style={styles.animationOne}
          />
          <View>
            <Text style={styles.signinText}>Sign In with your phone</Text>
            <View style={styles.PhoneNumberInput}>
              <TextInput
                label="Confirmation Code"
                value={code}
                onChangeText={(text) => setCode(text)}
                underlineColor={'black'}
                selectionColor={'black'}
                theme={{
                  colors: {
                    primary: '#5ca9af',
                    underlineColor: 'transparent',
                    background: 'white',
                  },
                }}
              />
              <HelperText
                type="error"
                visible={invalidConfirmationCode}
                style={{height: 20}}>
                Confirmation Code Is Invalid!
              </HelperText>
            </View>
          </View>
        </View>
        <View style={styles.supMargin}>
          <TouchableOpacity
            onPress={() => confirmCode()}
            style={styles.submitPhoneNo}>
            <Text style={styles.submitphoneNoText}>SignIn</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Fragment>
  );
}

{
  /*<View>
  <TextInput
    value={code}
    onChangeText={text => setCode(text)}
    style={styles.PhoneNumberInput}
  />
  <Button title="Confirm Code" onPress={() => confirmCode()} />
</View>;*/
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
    //justifyContent: 'center',
    backgroundColor: '#f9f5f5',
    flex: 1,
  },
  SubDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  hOne: {
    fontSize: responseWidth(8),
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
  PhoneNumberInput: {
    width: responseWidth(80),
    height: responseHeight(1),
    // borderColor: 'gray',
  },
  submitPhoneNo: {
    width: responseWidth(80),
    //height: responseHeight(5),
    alignItems: 'center',
    padding: responseHeight(1),
    borderRadius: 20,
    backgroundColor: '#5ca9af',
  },
  submitphoneNoText: {
    fontSize: responseWidth(4),
    color: 'white',
  },
  supMargin: {
    marginTop: responseHeight(10),
  },
});
