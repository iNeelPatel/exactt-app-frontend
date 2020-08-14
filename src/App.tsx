import React from 'react';
import { Provider } from 'react-redux';
import { Store, Persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import Login from './pages/login'
import '@atlaskit/css-reset';
import './App.css';

function App() {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <Login />
      </PersistGate>
    </Provider>
  );
}

export default App;
