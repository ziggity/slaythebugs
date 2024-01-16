import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { userReducer } from "/Users/eva/Desktop/my-game/src/user/userSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
