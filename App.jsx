import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './example/router/rootNavigaiton';
import {Provider} from 'react-redux';
import {store} from './example/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}
