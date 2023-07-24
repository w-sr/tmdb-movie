import 'react-native';
import React from 'react';
import MovieScreen from './Movie';
import {createStackNavigator} from '@react-navigation/stack';
import {StackList} from '../../routes/routes';
import {renderWithProviders} from '../../utils/tests.utils';
import {Movie} from '../../store/types';

const Stack = createStackNavigator<StackList>();

const mockMovie: Movie = {
  id: 1,
  title: 'title',
  original_title: 'original_title',
  poster_path: 'poster_path',
  release_date: '2020-02-20',
  vote_average: 7.3,
  vote_count: 100,
  overview: 'overview',
  backdrop_path: 'backdrop_path',
};

describe('Movies', () => {
  it('should find header title', () => {
    const screen = renderWithProviders(
      <Stack.Screen
        name="Movie"
        component={MovieScreen}
        initialParams={{
          movie: mockMovie,
        }}
      />,
    );

    expect(screen.getByText('Movie Details')).toBeTruthy();
    expect(screen.getByText('original_title')).toBeTruthy();
  });
});
