import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { mailActions } from "../Store/sendMail";
import { Modal } from "react-bootstrap";
import { Hello } from "../Api/hello";
import "./styles.css";

export const SendMail = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [api, setApi] = useState(false);
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.mail.showForm);
  const notification = useSelector((state) => state.mail.notification);

  const toggleHide = () => {
    dispatch(mailActions.showForm({ showForm: false }));
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  console.log(name, message, email);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission

    dispatch(
      mailActions.send({
        email,
        name,
        message,
      })
    );
    setEmail("");
    setMessage("");
    setName("");
    setApi(true);
  };

  const apiHandler = () => {
    setApi(false);
    console.log(notification);
    const handleNotification = setTimeout(() => {
      dispatch(
        mailActions.receive({
          notification: "",
        })
      );
    }, 3000);
  };

  return (
    <>
      <Modal
        show={modal}
        dialogClassName="modal-md"
        style={{ height: "max-content", margin: "auto" }}>
        <Modal.Header
          closeButton
          onClick={toggleHide}
          style={{ backgroundColor: "steelblue" }}></Modal.Header>
        <Modal.Body
          style={{ backgroundColor: "steelblue", textAlign: "center" }}>
          <form className="sendmail-form" onSubmit={handleSubmit}>
            <div className="form name">
              <label className="label name">Name</label>
              <input
                type="text"
                className="input name"
                placeholder="Enter Name"
                value={name}
                onChange={nameHandler}
                required
              />
            </div>
            <div className="form email">
              <label className="label email">Email</label>
              <input
                type="email"
                className="input email"
                placeholder="john@gmail.com"
                required
                value={email}
                onChange={emailHandler}
              />
            </div>
            <div className="form message">
              <label className="label message">Message</label>
              <textarea
                type="text"
                className="input message"
                required
                value={message}
                onChange={messageHandler}
              />
            </div>
            <div className="form button">
              <Button type="submit" className="btn send">
                Send
              </Button>
            </div>
            <span>
              <p style={{ color: "white" }}>{notification}</p>
            </span>
          </form>
        </Modal.Body>
      </Modal>
      {api && <Hello runApi={apiHandler} />}
    </>
  );
};
