import React, {Component, Fragment} from 'react';
import {SafeAreaView, View, Text, ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';

export default class SignOut extends Component {
  componentDidMount() {
    this.signOut();
  }

  signOut = async () => {
    try {
      auth().signOut();
      this.setState({user: null}); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <Fragment>
        <SafeAreaView
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{marginBottom: 20}}>Signing you Out !</Text>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}
