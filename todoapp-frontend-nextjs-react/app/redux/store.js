import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/count-slice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
