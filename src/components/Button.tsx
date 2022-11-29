import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import colors from 'utils/colors';
import metrics from 'utils/metrics';

interface IButtonContent {
  title: string;
}

const ButtonContent = (props: IButtonContent) => {
  return (
    <View style={style.button}>
      <Text style={style.text}>{props.title}</Text>
    </View>
  );
};

interface IButton {
  onPress: () => void;
  title: string;
}

export const Button = (props: IButton) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <ButtonContent title={props.title} />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: metrics.padding.md,
    backgroundColor: colors.purple,
    paddingLeft: metrics.padding.lg,
    paddingRight: metrics.padding.lg,
    paddingTop: metrics.padding.md,
    paddingBottom: metrics.padding.md,
    flex: 1,
  },
  text: {
    color: colors.white,
  },
});
