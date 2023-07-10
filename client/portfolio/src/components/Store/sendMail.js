import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    showForm: false,
    name: "",
    email: "",
    message: "",
    notification: "",
  },
  reducers: {
    // for showing the form to send mail
    showForm(state, action) {
      const item = action.payload;
      state.showForm = item.showForm;
      console.log(state.showForm);
    },

    // sending email from client
    send(state, action) {
      const item = action.payload;
      state.message = item.email;
      state.name = item.name;
      state.email = item.email;
    },
    receive(state, action) {
      const item = action.payload;
      state.notification = item.notification;
    },
  },
});
export const mailActions = mailSlice.actions;
export default mailSlice;
