import React from 'react';
import '@atlaskit/css-reset';
import { Provider } from 'react-redux';
import { Store, Persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import Login from './pages/login'

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
