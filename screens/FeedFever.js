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
import {HelperText, TextInput} from 'react-native-paper';

export default function FeedFever({navigation, route}) {
  const [name, setName] = useState('');
  const [invalidName, setInvalidName] = useState(false);
  const [userDataArray, setUserDataArray] = useState([]);
  const [graphData, setGraphData] = useState({
    labels: ['a', 'b'],
    data: [2, 2],
  });
  const {feature} = route.params;

  useEffect(() => {
    refreshGraphData();
  }, []);

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
  const refreshGraphData = () => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        console.log(user.uid);
        getGraphData(user.uid);
      } else {
        // User not logged in or has just logged out.
        null;
      }
    });
  };
  const getGraphData = (val) => {
    var labels = [];
    var Data = [];
    var flabel = [];
    var Dlabel = [];
    firestore()
      .collection('MX8UcW9SybhzgkGD3UPoEaIgVe13')
      .doc('data')
      .collection('Fever')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          //console.log(doc.id, ' => ', doc.data());
          if (doc.id != 'personal_Details') {
            var reformOne = doc.id.split('-');
            var reformTwo = (
              reformOne[2] +
              '-' +
              reformOne[1] +
              '-' +
              reformOne[0]
            ).toString();
            console.log(reformTwo);
            var newDateConstruct = new Date(reformTwo);
            console.log(newDateConstruct);
            var options = {weekday: 'long'};
            var dayNameFull = new Intl.DateTimeFormat('en-US', options)
              .format(newDateConstruct)
              .toString();
            var Dlabel = dayNameFull.slice(0, 3);
            console.log(Dlabel);
            labels.push(Dlabel);
            Data.push(parseInt(doc.data().Fever, 10));
            flabel = labels.reverse();
            fData = Data.reverse();
          } else {
            null;
          }
        });

        setGraphData({labels: flabel, data: fData});
        console.log('data unreversed =>' + Data);
        console.log(graphData.data);
        console.log(graphData.labels);

        //, () => {
        // this.props.callback(this.state.graphData.data);
        // });

        //console.log(this.state.graphData);
      });
  };

  const OnSubmitName = () => {
    writedata();
    refreshGraphData();
  };

  const writedata = () => {
    firestore()
      .collection('MX8UcW9SybhzgkGD3UPoEaIgVe13')
      .doc('data')
      .collection('Fever')
      .doc('13-06-2020')
      .set({
        Fever: name,
      })
      .then(function () {
        console.log('Document successfully written!');
      })
      .catch(function (error) {
        console.error('Error writing document: ', error);
      });
  };
  if (false) {
    var Items = graphData.map((item, index) => {
      return (
        <View
          style={{
            backgroundColor: 'white',
            margin: 10,
          }}>
          <Text>{item.labels[index]}</Text>
          <Text>{item.data[index]}</Text>
        </View>
      );
    });
  } else {
    null;
  }

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <View style={{marginBottom: 0}}>
        <Text style={{color: 'black', fontSize: 20}}>Fever History</Text>
        <View>{Items}</View>
        <View>
          {true ? (
            <LineChart
              data={{
                labels: graphData.labels,
                datasets: [
                  {
                    data: graphData.data,
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
          ) : null}
        </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View style={{width: responseWidth(80), height: responseHeight(1)}}>
          <TextInput
            label="Fever Intensity"
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
        <View style={{marginTop: responseHeight(8)}}>
          <TouchableOpacity
            onPress={() => OnSubmitName()}
            style={{
              height: responseHeight(3),
              width: responseWidth(80),
              alignItems: 'center',
              backgroundColor: 'black',
              borderRadius: 20,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white'}}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
