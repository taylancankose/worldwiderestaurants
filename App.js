import React from 'react';
import {Provider} from 'react-redux';
import Router from './app/Router';
import {store} from './app/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
