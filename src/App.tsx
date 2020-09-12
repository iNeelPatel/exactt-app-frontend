// ====================================== Module imports ======================================

import React from "react";
import { Provider } from "react-redux";
import { Store, Persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "@atlaskit/css-reset";

// ====================================== File import ======================================
import Navigation from "./config/Navigation";
import "./App.css";

function App() {
   return (
      <Provider store={Store}>
         <PersistGate loading={null} persistor={Persistor}>
            <Navigation />
         </PersistGate>
      </Provider>
   );
}

export default App;
