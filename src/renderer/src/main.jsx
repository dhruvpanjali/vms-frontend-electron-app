// import './assets/main.css'
import './assets/index.css'

import React from "react";
import ReactDOM from "react-dom/client";
import './assets/index.css'
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";

import { ConfigProvider, theme } from "antd";
import tailwindConfig from "../../../tailwind.config.js";
const tailwindColors = tailwindConfig.theme.extend.colors;

// import { store } from "./app/store.js";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore, persistReducer } from "redux-persist";

// const reduxPersistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  //   <PersistGate loading={null} persistor={reduxPersistor}>
  //     <RouterProvider router={router}></RouterProvider>
  //   </PersistGate>
  // </Provider>
  // -----------------------------------------------------------------
  // theme={{ token: { motion: false } }}
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: tailwindColors.Blue1,
        // borderColor: "#141414",
        fontFamily: "Poppins, sans-serif",
      },
      components: {
        Select: {
          optionFontSize: 20,
        },
      },
      algorithm: theme.defaultAlgorithm,
    }}
  >
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      }}
    ></RouterProvider>
  </ConfigProvider>
);
