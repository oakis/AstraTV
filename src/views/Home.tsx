import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { RootStackParamList } from 'App';
import colors from 'utils/colors';
import metrics from 'utils/metrics';
import { SearchContext } from 'contexts/SearchContext';

// type IHome = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = () => {
  const [search, setSearch] = useState('');

  const { results, searchTvShows } = useContext(SearchContext);

  const onSearch = () => {
    console.log('onSearch');
    searchTvShows(search);
  };

  return (
    <ScrollView style={style.container}>
      <Text style={style.title}>Find TV series</Text>
      <View style={style.spacer} />
      <View style={style.row}>
        <TextInput
          style={style.input}
          onChangeText={setSearch}
          value={search}
        />
        <Button onPress={onSearch} title="Sök" />
      </View>
      <View style={style.spacer} />
      {/* <FlatList /> */}
      {results.map(result => (
        <Text>{result.show.name}</Text>
      ))}
    </ScrollView>
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
  row: {
    display: 'flex',
    justifyContent: 'space-around',
  },
});

export default Home;
