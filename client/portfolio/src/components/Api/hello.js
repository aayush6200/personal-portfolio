import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { mailActions } from "../Store/sendMail";

export const Hello = (props) => {
  const message = useSelector((state) => state.mail.message);
  const name = useSelector((state) => state.mail.name);
  const email = useSelector((state) => state.mail.email);
  const dispatch = useDispatch();
  // api for sending client messages

  const url = "http://localhost:4000/user/sendHello";
  useEffect(() => {
    const sendHello = async () => {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
          name: name,
          email: email,
        }),
      });

      if (!response.ok) {
        console.log("There was a problem sending message to");
        dispatch(
          mailActions.receive({
            notification: "error occured",
          })
        );
      } else {
        console.log("Sent message successfully");
        const res = await response.json();
        console.log("Sent message successfully", res.message);
        dispatch(
          mailActions.receive({
            notification: res.message,
          })
        );
      }

      props.runApi();
    };
    sendHello();
  }, [name, email, message]);
};
