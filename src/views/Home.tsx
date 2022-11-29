import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'App';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import colors from 'utils/colors';
import metrics from 'utils/metrics';

type IHome = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = (props: IHome) => {
  const [search, setSearch] = useState('');

  return (
    <View style={style.container}>
      <Text style={style.title}>Find TV series</Text>
      <View style={style.spacer} />
      <TextInput style={style.input} onChangeText={setSearch} value={search} />
      <View style={style.spacer} />
      {/* <FlatList /> */}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: metrics.padding.lg,
    paddingRight: metrics.padding.lg,
    paddingTop: metrics.padding.md,
    paddingBottom: metrics.padding.md,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  spacer: {
    marginTop: metrics.padding.md,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: metrics.padding.md,
    padding: metrics.padding.sm,
  },
});

export default Home;
