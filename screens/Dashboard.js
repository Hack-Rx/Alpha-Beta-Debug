import React, {useState, Fragment, useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  StatusBar,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import {LineChart} from 'react-native-chart-kit';

export default function Dashboard({navigation, route}) {
  const [uid, setUid] = useState(null);
  const [usrName, setUsrName] = useState('');

  useEffect(() => {
    checkFirstlogin();
  }, []);
  const checkFirstlogin = () => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        console.log(user.uid);
        setUid(user.uid);

        firestore()
          .collection(user.uid)
          .doc('metaData')
          .get()
          .then((doc) => {
            if (doc.exists) {
              console.log('User Check = Dashboard => Old User', doc.data());
              setUsrName(doc.data().name);
              // doc.data() will be undefined in this case
            } else {
              console.log('User Check = Dashboard => New User');
              navigation.navigate('Introduction');
            }
          })
          .catch(function (error) {
            console.log('Error getting document:', error);
          });
      } else {
        // User not logged in or has just logged out.
        console.log('User not loggedIn');
      }
    });
  };

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.bannerContainer}>
          <Text style={styles.bannerTextOne}>Cov</Text>
          <Text style={styles.bannerTextTwo}>R</Text>
          <Text style={styles.bannerTextThree}>x</Text>
        </View>
        <View
          style={styles.introContainer}
          shadowOffset={{height: 2}}
          shadowColor="black"
          shadowOpacity={0.2}>
          <View style={styles.introviewone}>
            <Text style={styles.helloText}>Hi, {usrName.split(' ')[0]}</Text>
            <Text style={styles.takeatest}>Take a quick Covid-19 test</Text>
            <Text style={styles.takeatest}>for risk analysis</Text>
            <TouchableOpacity
              style={styles.testbutton}
              onPress={() =>
                navigation.navigate('Test', {userid: uid, name: usrName})
              }>
              <Text style={styles.testbuttontext}>Take a Test</Text>
            </TouchableOpacity>
          </View>
          <LottieView
            source={require('../assets/animations/dashOne.json')}
            autoPlay
            loop
            style={styles.animationOne}
          />
        </View>

        <View
          style={styles.symptomlogheader}
          shadowOffset={{height: 2}}
          shadowColor="black"
          shadowOpacity={0.05}>
          <Text style={styles.stymptomheaderText}>Symptom's Log</Text>
        </View>
        <View
          style={styles.symptomlogbody}
          shadowOffset={{height: 2}}
          shadowColor="black"
          shadowOpacity={0.05}>
          <TouchableOpacity
            style={styles.symptomholder}
            onPress={() =>
              navigation.navigate('AddSymptom', {feature: 'Cough'})
            }>
            <Image
              source={require('../assets/images/cough.png')}
              style={styles.symptomcoughimg}
            />
            <Text style={styles.symptomadd}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.symptomholder}>
            <Image
              source={require('../assets/images/smell.png')}
              style={styles.symptomsmellimg}
            />
            <Text style={styles.symptomadd}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.symptomholder}
            onPress={() => navigation.navigate('Fever', {feature: 'Fever'})}>
            <Image
              source={require('../assets/images/temp.png')}
              style={styles.symptomsmellimg}
            />
            <Text style={styles.symptomadd}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.symptomholder}>
            <Image
              source={require('../assets/images/medicine.png')}
              style={styles.symptomcoughimg}
            />
            <Text style={styles.symptomadd}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.graphdatacontainer}>
          <Text style={styles.healthprogresstext}>Your Health Progress :</Text>
          <View style={styles.graphcontainer}>
            <LineChart
              data={{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                ],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                    ],
                  },
                ],
              }}
              width={(Dimensions.get('window').width / 100) * 95} // from react-native
              height={(Dimensions.get('window').width / 100) * 44}
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#fac17a',
                backgroundGradientFrom: '#f7b159',
                backgroundGradientTo: '#f7900f',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {},
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
        </View>
        <View
          style={styles.healthCheck}
          shadowOffset={{height: 2}}
          shadowColor="black"
          shadowOpacity={0.05}>
          <View style={styles.healthcheckpartone}>
            <View style={styles.healthcheckheading}>
              <Text style={styles.healthcheckBTXT}>Consult </Text>
              <Text style={styles.healthCheckNTXT}>and </Text>
              <Text style={styles.healthcheckBTXT}>Get Tested !</Text>
            </View>
            <View style={styles.healthCheckContentText}>
              <Text style={styles.healthcheckNNTXT}>Consult And</Text>
              <Text style={styles.healthcheckNNTXT}>Get Tested For</Text>
              <Text style={styles.healthcheckNNTXT}>
                For Covid-19 Symptom's.
              </Text>
            </View>
          </View>
          <View style={styles.healthcheckparttwo}>
            <Image
              source={require('../assets/images/healthcheck.png')}
              style={styles.healthCheckImg}
            />
          </View>
        </View>

        <View
          style={styles.chatButton}
          shadowOffset={{height: 3, width: 3}}
          shadowColor="#9858bf"
          shadowOpacity={0.7}>
          <TouchableOpacity
            style={styles.topchat}
            onPress={() => navigation.navigate('Chat')}>
            <Image
              source={require('../assets/images/feedback.png')}
              style={styles.chatIcon}
            />

            <Text style={styles.chatText}>Chat with Anandi</Text>
          </TouchableOpacity>
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
  chatButton: {
    width: responseWidth(50),
    height: responseHeight(4.5),
    backgroundColor: '#9858bf',
    borderRadius: 20,
    position: 'absolute',
    bottom: responseHeight(3),
    right: responseWidth(3.5),
  },
  chatIcon: {
    height: responseHeight(3),
    width: responseHeight(3),
    //marginLeft: responseWidth(1.5),
  },
  chatText: {
    color: 'white',
    fontFamily: 'NotoSansJP-Bold',
    marginLeft: responseWidth(2.5),
  },
  topchat: {
    padding: responseHeight(0.9),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerContainer: {
    padding: responseHeight(3),
    paddingTop: responseHeight(1),
    fontFamily: 'NotoSansJP-Bold',
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  bannerTextOne: {
    fontSize: resposeFont(8),
    fontFamily: 'NotoSansJP-Bold',
    color: '#633794',
    left: 0,
  },
  bannerTextTwo: {
    fontSize: resposeFont(8),
    color: '#633794',
    fontFamily: 'NotoSansJP-Bold',
  },
  bannerTextThree: {
    fontSize: resposeFont(8),
    color: '#50c1aa',
    fontFamily: 'NotoSansJP-Bold',
  },
  introContainer: {
    width: responseWidth(95),
    height: responseHeight(18),
    backgroundColor: '#f9f5f5',
    borderRadius: 20,
    padding: responseHeight(1.7),
    paddingLeft: responseWidth(6),
    flexDirection: 'row',
  },
  helloText: {
    fontSize: resposeFont(4.5),
    fontFamily: 'NotoSansJP-Medium',
    marginBottom: 4,
  },
  takeatest: {
    fontFamily: 'NotoSansJP-Medium',
    fontSize: resposeFont(4),
    color: '#4e4b4a',
  },
  testbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#93cdf8',
    marginTop: responseHeight(1.2),
    height: responseHeight(3),
    width: responseWidth(28),
    borderRadius: 12,
  },
  textbuttontext: {
    fontSize: resposeFont(1),
    fontFamily: 'NotoSansJP-Bold',
  },
  animationOne: {
    right: 0,
    height: responseHeight(14),
    width: responseWidth(10),
  },
  introviewone: {marginRight: responseWidth(3)},
  symptomlogheader: {
    backgroundColor: '#a1f7d7',
    padding: responseHeight(1.3),
    width: responseWidth(95),
    alignItems: 'flex-start',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: responseHeight(1),
  },
  symptomlogbody: {
    width: responseWidth(95),
    height: responseHeight(13),
    backgroundColor: '#d2ffe7',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  stymptomheaderText: {
    fontFamily: 'NotoSansJP-Bold',
    fontSize: resposeFont(3),
    marginLeft: responseWidth(3),
    color: '#01613e',
  },
  symptomholder: {
    width: responseWidth(20),
    height: responseWidth(20),
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: responseWidth(3),
  },
  symptomcoughimg: {
    width: responseWidth(20),
    height: responseWidth(20),
  },
  symptomsmellimg: {
    width: responseWidth(13),
    height: responseWidth(13),
  },
  symptomadd: {
    zIndex: 1,
    fontSize: resposeFont(8),
    color: 'red',
    fontWeight: 'bold',
    position: 'absolute',
    left: responseWidth(4),
    bottom: responseWidth(1),
  },
  graphcontainer: {
    height: responseHeight(25),
    width: responseWidth(95),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 0,
  },
  graphdatacontainer: {
    backgroundColor: '#f7b056',
    height: responseHeight(20),
    borderRadius: 20,
    marginTop: responseHeight(1),
  },
  healthprogresstext: {
    marginBottom: responseHeight(0),
    marginTop: responseHeight(0.7),
    marginLeft: responseWidth(6),
    fontFamily: 'NotoSansJP-Bold',
    fontSize: resposeFont(3),
    color: '#543101',
  },
  healthCheck: {
    height: responseHeight(20),
    width: responseWidth(95),
    backgroundColor: '#bfdbff',
    marginTop: responseHeight(5),
    borderRadius: 20,
    flexDirection: 'row',
    padding: responseHeight(2),
  },
  healthcheckheading: {
    marginTop: responseHeight(1),
    flexDirection: 'row',
  },
  healthCheckNTXT: {
    fontSize: resposeFont(4.2),
    fontFamily: 'NotoSansJP-Medium',
  },
  healthcheckBTXT: {
    fontFamily: 'NotoSansJP-Bold',
    fontSize: resposeFont(4.2),
    color: '#065ef1',
  },
  healthcheckNNTXT: {
    fontSize: resposeFont(3.5),
    fontFamily: 'NotoSansJP-Medium',
    //color: '#4e4b4a',
  },
  healthCheckContentText: {
    marginLeft: responseWidth(2),
    marginTop: responseHeight(1),
  },
  healthCheckImg: {
    height: responseWidth(30),
    width: responseWidth(30),
  },
});
