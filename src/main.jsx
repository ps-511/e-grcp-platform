import ReactDOM from "react-dom/client";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
} from "react-router-dom";

import {
  Provider,
} from "react-redux";

import {
  PersistGate,
} from "redux-persist/integration/react";

import {
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";

import {
  store,
  persistor,
} from "./store/store";

import AppRoutes from "./routes/AppRoutes";

import ErrorBoundary from "./components/ErrorBoundary";

const darkTheme =
  createTheme({
    palette: {
      mode: "dark",
    },
  });

const lightTheme =
  createTheme({
    palette: {
      mode: "light",
    },
  });
function Root() {
  const darkMode =
    useSelector(
      (state) =>
        state.ui.darkMode
    );

  return (
    <ThemeProvider
      theme={
        darkMode
          ? darkTheme
          : lightTheme
      }
    >
      <CssBaseline />

      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(
  document.getElementById(
    "root"
  )
).render(
  <ErrorBoundary>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={
          persistor
        }
      >
        <Root />
      </PersistGate>
    </Provider>
  </ErrorBoundary>
);