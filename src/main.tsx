// import React from "react";
import ReactDOM from "react-dom/client";
// 全局重置css属性
import "reset-css";
import "@/assets/iconfont/iconfont.less";
import "@/styles/global.less";
import "@/language/index";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
