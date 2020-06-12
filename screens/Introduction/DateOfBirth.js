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

export default function DateOfBirth({navigation, route}) {
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [invalidName, setInvalidName] = useState(false);

  const OnSubmitName = () => {
    navigation.navigate('Gender', {
      Name: route.params.Name,
      Dob: date + '/' + month + '/' + year,
    });
  };
  return (
    <Fragment>
      <SafeAreaView style={styles.mainContainer}>
        <LottieView
          source={require('../../assets/animations/dob.json')}
          autoPlay
          loop
          style={styles.animationOne}
        />

        <View style={styles.ContentDiv}>
          <Text style={styles.mainheading}>
            Nice to meet you {route.params.Name.split(' ')[0]} !
          </Text>
          <Text style={styles.Subheading}>When is your birthday ?</Text>
          <Text style={styles.hTwo}>DOB</Text>

          <View style={styles.inputFeild}>
            <View style={styles.dobrow}>
              <TextInput
                label="DD"
                value={date}
                onChangeText={(text) => setDate(text)}
                underlineColor={'black'}
                selectionColor={'black'}
                style={styles.date}
                theme={{
                  colors: {
                    primary: '#5ca9af',
                    underlineColor: 'transparent',
                    background: 'white',
                  },
                }}
              />
              <Text style={styles.datespliter}>-</Text>
              <TextInput
                label="MM"
                value={month}
                onChangeText={(text) => setMonth(text)}
                underlineColor={'black'}
                selectionColor={'black'}
                style={styles.month}
                theme={{
                  colors: {
                    primary: '#5ca9af',
                    underlineColor: 'transparent',
                    background: 'white',
                  },
                }}
              />
              <Text style={styles.datespliter}>-</Text>
              <TextInput
                label="YYYY"
                value={year}
                onChangeText={(text) => setYear(text)}
                underlineColor={'black'}
                selectionColor={'black'}
                style={styles.year}
                theme={{
                  colors: {
                    primary: '#5ca9af',
                    underlineColor: 'transparent',
                    background: 'white',
                  },
                }}
              />
            </View>
            <HelperText type="error" visible={invalidName} style={{height: 20}}>
              DOB Is Invalid!
            </HelperText>
          </View>
          <View style={styles.supMargin}>
            <TouchableOpacity
              onPress={() => OnSubmitName()}
              style={styles.Submit}>
              <Text style={styles.SubmitText}>Next</Text>
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
    color: '#499db7',
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
    padding: responseWidth(8),
    //marginLeft: responseWidth(-3),
  },
  hTwo: {
    fontSize: responseWidth(5),
    fontFamily: 'NotoSansJP-Bold',
    textAlign: 'left',
    color: '#499db7',
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
  inputFeild: {
    width: responseWidth(80),
    height: responseHeight(1),
    // borderColor: 'gray',
  },
  Submit: {
    width: responseWidth(80),
    //height: responseHeight(5),
    alignItems: 'center',
    padding: responseHeight(1),
    borderRadius: 20,
    backgroundColor: 'black',
  },
  SubmitText: {
    fontSize: responseWidth(4),
    color: 'white',
  },
  supMargin: {
    marginTop: responseHeight(9),
  },
  dobrow: {
    flexDirection: 'row',
  },
  date: {
    width: responseWidth(15),
    position: 'relative',
  },
  month: {
    width: responseWidth(15),
    position: 'relative',
  },
  year: {
    width: responseWidth(19),
    position: 'relative',
  },
  datespliter: {
    fontSize: responseWidth(10),
    //fontFamily: 'NotoSansJP-Bold',
    marginTop: responseHeight(1),
  },
});
