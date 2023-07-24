import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MovieScreen from '../screens/Movie';
import MoviesScreen from '../screens/Movies';
import {StackList} from './routes';

const Stack = createStackNavigator<StackList>();

const AppContainer = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Movies">
        <Stack.Screen component={MoviesScreen} name="Movies" />
        <Stack.Screen component={MovieScreen} name="Movie" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppContainer;
