import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from 'utils/colors';
import Home from 'views/Home';
import Details from 'views/Details';
import { SearchProvider } from 'contexts/SearchContext';
import { DetailsProvider } from 'contexts/DetailsContext';

const headerOptions = {
  headerStyle: {
    backgroundColor: colors.purple,
  },
  headerTintColor: colors.white,
};

export type RootStackParamList = {
  Home: undefined;
  Details: { id: number; title: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.purple} barStyle="light-content" />
      <SearchProvider>
        <DetailsProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                options={headerOptions}
              />
              <Stack.Screen
                name="Details"
                component={Details}
                options={headerOptions}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </DetailsProvider>
      </SearchProvider>
    </>
  );
};

export default App;
