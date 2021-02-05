import { configureStore } from "@reduxjs/toolkit";

import appReducer from "../slices/appSlice";
import cameraReducer from "../slices/cameraSlice";

export default configureStore({
  reducer: {
    app: appReducer,
    camera: cameraReducer,
  },
  devTools: true,
});
