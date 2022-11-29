import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'App';
import React from 'react';
import { Text } from 'react-native';

type IDetails = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = (props: IDetails) => {
  return <Text>Details</Text>;
};

export default Details;
