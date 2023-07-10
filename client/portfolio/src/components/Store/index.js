import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import mailSlice from "./sendMail";

export const store = configureStore({
  reducer: { mail: mailSlice.reducer },
});
