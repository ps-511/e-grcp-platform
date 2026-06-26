import {
  configureStore,
} from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
} from "redux-persist";

import createWebStorage from "redux-persist/es/storage/createWebStorage";

import authReducer from "./slices/authSlice";
import dashboardReducer from "./slices/dashboardSlice";
import vendorReducer from "./slices/vendorSlice";
import reportReducer from "./slices/reportSlice";
import procurementReducer from "./slices/procurementSlice";
import riskReducer from "./slices/riskSlice";
import complianceReducer from "./slices/complianceSlice";
import auditReducer from "./slices/auditSlice";
import notificationReducer from "./slices/notificationSlice";
import uiReducer from "./slices/uiSlice";
const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(key, value) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();
const authPersistConfig = {
  key: "auth",
  storage,
};

const uiPersistConfig = {
  key: "ui",
  storage,
};

const persistedAuthReducer =
  persistReducer(
    authPersistConfig,
    authReducer
  );

const persistedUiReducer =
  persistReducer(
    uiPersistConfig,
    uiReducer
  );

export const store =
  configureStore({
    reducer: {
      auth:
        persistedAuthReducer,

      dashboard:
        dashboardReducer,

      vendors:
        vendorReducer,

      reports:
        reportReducer,

      procurement:
        procurementReducer,

      risk:
        riskReducer,

      compliance:
        complianceReducer,

      audit:
        auditReducer,

      notifications:
        notificationReducer,

      ui:
        persistedUiReducer,
    },

    middleware: (
      getDefaultMiddleware
    ) =>
      getDefaultMiddleware({
        serializableCheck:
          false,
      }),
  });

export const persistor =
  persistStore(store);