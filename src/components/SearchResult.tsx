import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';
import metrics from 'utils/metrics';

interface ISearchResult extends ISearch {
  onPress: (id: number) => void;
}

export const SearchResult = (props: ISearchResult) => {
  const year = new Date(props.show.premiered).getFullYear();
  const rating = props.show.rating.average;

  const onPress = () => {
    props.onPress(props.show.id);
  };

  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      <Image source={{ uri: props.show.image.medium }} style={style.image} />
      <View style={style.column}>
        <Text style={style.title}>{props.show.name}</Text>
        <Text style={style.year}>{year}</Text>
        <Text style={style.rating}>{rating ? `${rating} / 10` : null}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: metrics.padding.md,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: metrics.padding.lg,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  year: {},
  rating: {},
  image: {
    width: 74.7457627118644,
    height: 105,
  },
});
