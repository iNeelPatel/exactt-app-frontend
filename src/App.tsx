// ====================================== Module imports ======================================

import React from "react";
import { Provider } from "react-redux";
import { Store, Persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "@atlaskit/css-reset";
import Parse from "parse";

// ====================================== File import ======================================
import ParseConfig from "./config/parse";
import Navigation from "./config/Navigation";
import "./App.css";

// ====================================== Server Initialize ======================================
Parse.initialize(ParseConfig.organizationId, ParseConfig.organizationSecret, ParseConfig.organizationSecret);
Parse.serverURL = ParseConfig.url;

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
