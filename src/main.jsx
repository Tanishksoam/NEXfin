import React from "react";
import ReactDOM from "react-dom/client";
// import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { app } from "./firebase.config.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store} app={app}>
    <React.StrictMode>
      <PersistGate loading={"loading"} persistor={persistor}>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>
);
