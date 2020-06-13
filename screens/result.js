import React from 'react';
import {View, Text} from 'react-native';

export default function Result({navigation, route}) {
  const {corona} = route.params;
  const {health} = route.params;
  const {stress} = route.params;
  const {placibo} = route.params;
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <Text>corona probability : </Text>
        <Text>{corona} %</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Stress level : </Text>
        <Text>{stress} %</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Stress effect on health : </Text>
        <Text>{health} %</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>probability of a placibo : </Text>
        <Text>{placibo} %</Text>
      </View>
    </View>
  );
}
