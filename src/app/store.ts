import { configureStore } from "@reduxjs/toolkit";
import triggerReducer from "./triggerSlice";
import dialogReducer from "./dialogSlice";

const store = configureStore({
  reducer: {
    dialog: dialogReducer,
    triggers: triggerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
