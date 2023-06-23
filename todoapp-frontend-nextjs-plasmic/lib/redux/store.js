import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import taskReducer from "./features/task-slice";
import inputReducer from "./features/input-slice";

export default configureStore({
  reducer: {
    tasks: taskReducer,
    input: inputReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
