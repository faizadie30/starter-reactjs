import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../features/user/usersAPI";
const { REACT_APP_DEV } = import.meta.env;

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
  devTools: REACT_APP_DEV === "false" ? false : true,
});
