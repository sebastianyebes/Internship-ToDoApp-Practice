import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import taskReducer from "./features/task-slice";

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
