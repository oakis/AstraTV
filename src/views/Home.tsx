import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'App';
import React from 'react';
import { Text } from 'react-native';

type IHome = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = (props: IHome) => {
  return <Text>Home</Text>;
};

export default Home;
