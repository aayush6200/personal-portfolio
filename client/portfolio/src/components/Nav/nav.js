import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { SendMail } from "../SendEmail/sendEmail";
import { useState } from "react";
import { mailActions } from "../Store/sendMail";
import { useDispatch, useSelector } from "react-redux";

import {
  faCheckSquare,
  faCoffee,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./nav.css";

function NavBar() {
  const dispatch = useDispatch();

  // shows mail form by dispatching action to show form
  const toggleModal = () => {
    dispatch(
      mailActions.showForm({
        showForm: true,
      })
    );
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="home">Home</NavLink>
            </Nav>
            <Nav>
              <FontAwesomeIcon
                icon={faMessage}
                style={{ cursor: "pointer" }}
                beat
                size="xl"
                onClick={toggleModal}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Modal show={modal} onHide={toggleModal} dialogClassName="modal-md">
        <Modal.Header
          closeButton
          style={{ backgroundColor: "steelblue" }}></Modal.Header>
        <Modal.Body style={{ backgroundColor: "steelblue" }}>
          <SendMail />
        </Modal.Body>
      </Modal> */}
      <SendMail />
    </>
  );
}

export default NavBar;
