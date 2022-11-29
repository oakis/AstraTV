import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'App';
import colors from 'utils/colors';
import metrics from 'utils/metrics';
import { SearchContext } from 'contexts/SearchContext';
import { Button } from 'components/Button';
import { SearchResult } from 'components/SearchResult';

type IHomeView = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = (props: IHomeView) => {
  const [search, setSearch] = useState('');

  const { results, searchTvShows } = useContext(SearchContext);

  const onSearch = () => {
    searchTvShows(search);
  };

  const navigateToDetails = (id: number, title: string) => {
    props.navigation.navigate('Details', { id, title });
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
        <View style={style.horizontalSpacer} />
        <Button onPress={onSearch} title="Sök" />
      </View>
      <View style={style.spacer} />
      {results.map(result => (
        <SearchResult
          {...result}
          onPress={navigateToDetails}
          key={result.show.id}
        />
      ))}
      <View style={style.spacer} />
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
    color: colors.black,
  },
  spacer: {
    marginTop: metrics.padding.lg,
  },
  horizontalSpacer: {
    marginRight: metrics.padding.md,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: metrics.padding.md,
    paddingLeft: metrics.padding.md,
    paddingRight: metrics.padding.md,
    paddingTop: metrics.padding.sm,
    paddingBottom: metrics.padding.sm,
    flex: 1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
  },
});

export default Home;
