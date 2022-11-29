import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'App';
import { DetailsContext } from 'contexts/DetailsContext';
import React, { useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';
import colors from 'utils/colors';
import metrics from 'utils/metrics';

type IDetailsView = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = (props: IDetailsView) => {
  const { clearDetails, getDetails, details } = useContext(DetailsContext);

  useFocusEffect(
    React.useCallback(() => {
      getDetails(props.route.params.id);
      props.navigation.setOptions({
        title: props.route.params.title,
      });
      return () => clearDetails();
    }, [
      props.route.params.id,
      getDetails,
      clearDetails,
      props.route.params.title,
      props.navigation,
    ]),
  );

  if (!details) {
    return <Text>loading...</Text>;
  }

  return (
    <View style={style.container}>
      {details.summary ? (
        <WebView
          style={style.summary}
          source={{
            html: ` <html>
                      <head>
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        <style>
                          body { font-size: 14px; color: ${colors.black} }
                        </style>
                      </head>
                      <body>${details.summary}</body>
                    </html>`,
          }}
          scrollEnabled={false}
          nestedScrollEnabled={false}
        />
      ) : null}
    </View>
  );
};

export default Details;

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: metrics.padding.lg,
    paddingRight: metrics.padding.lg,
    paddingTop: metrics.padding.md,
    paddingBottom: metrics.padding.md,
  },
  summary: {
    backgroundColor: 'transparent',
  },
});
