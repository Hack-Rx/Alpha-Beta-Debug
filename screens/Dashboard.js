import React, {useState, Fragment, useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Dashboard({navigation, route}) {
  const [uid, setUid] = useState(null);

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
      <SafeAreaView style={styles.mainContainer}>
        <View>
          <Text>Welcome</Text>
          <Text>{uid}</Text>
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
    bottom: responseHeight(5),
    right: responseWidth(10),
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
});
