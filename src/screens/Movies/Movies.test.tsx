import 'react-native';
import React from 'react';
import Movies from './Movies';
import {createStackNavigator} from '@react-navigation/stack';
import {StackList} from '../../routes/routes';
import {renderWithProviders} from '../../utils/tests.utils';

const Stack = createStackNavigator<StackList>();

describe('Movies', () => {
  it('should find header title', () => {
    const screen = renderWithProviders(
      <Stack.Screen name="Movies" component={Movies} />,
    );

    expect(screen.getByText('Pop Movies')).toBeTruthy();
  });
});
