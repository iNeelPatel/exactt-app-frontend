import React from 'react';
import '@atlaskit/css-reset';
import { Provider } from 'react-redux';
import Store from './store'
import Login from './pages/login'

function App() {
  return (
    <Provider store={Store}>
      <Login />
    </Provider>
  );
}

export default App;
