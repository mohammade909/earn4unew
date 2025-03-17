// store.js
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

import authReducer from "./authSlice";
import usersReducer from "./userSlice";
import plansReducer from "./planSlice";
import actplanReducer from "./actplanSlice";
import supportReducer from "./supportSlice";
import withdrawalReducer from "./withdrawalSlice";
import referralReducer from "./referralSlice";
import depositeReducer from "./depositeSlice";
import newsReducer from "./newsSlice";
import topupReducer from "./topupSlice";
import settingsReducer from "./settingsSlice";
import qrReducer from "./qrSlice";
import transactionReducer from "./transactionSlice";
import leadershipReducer from "./leadershipSlice";
import transferReducer from "./transferSlice";
import notificationReducer from "./notificationSlice";
import otpReducer from "./otpSlice";
import achivesReducer from "./achiversSlice";
import forgotReducer from "./forgotSlice";
import ctoReducer from "./ctoSlice";
import offerReducer from "./offer";

const rootReducer = combineReducers({
  auth: authReducer, 
  allusers: usersReducer, 
  allplans: plansReducer, 
  allactplans: actplanReducer, 
  allsupport:supportReducer,
  allwithdrawal:withdrawalReducer,
  referralTree:referralReducer,
  alldeposite:depositeReducer,
  allnews:newsReducer,
  alltopup:topupReducer,
  settings:settingsReducer,
  qr:qrReducer,
  transaction:transactionReducer,
  allleadership:leadershipReducer,
  transfer:transferReducer,
  notifications:notificationReducer,
  otp:otpReducer,
  achivers:achivesReducer,
  forgot:forgotReducer,
  cto:ctoReducer,
  offers:offerReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
