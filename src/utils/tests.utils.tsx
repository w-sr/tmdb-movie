import React, {PropsWithChildren} from 'react';
import {render} from '@testing-library/react-native';
import type {RenderOptions} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';
import type {PreloadedState} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import type {AppStore, RootState} from '../store';
import RootReducer from '../store/slices';
import {StackList} from '../routes/routes';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

const Stack = createStackNavigator<StackList>();

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({reducer: RootReducer, preloadedState}),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({children}: PropsWithChildren<{}>): JSX.Element {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>{children}</Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }

  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
}
