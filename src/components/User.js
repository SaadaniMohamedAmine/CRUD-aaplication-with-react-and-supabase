import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import supabase from "../supabase-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Button } from "react-bootstrap";
import "../style/customStyle.css";

const User = ({ user, fetchUsers }) => {
  const [show, setShow] = useState(false);
  const [userUpdated, setUserUpdated] = useState(user);
  const handleChange = (e) => {
    setUserUpdated({ ...userUpdated, [e.target.name]: e.target.value });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const notify = () => toast.success("The user is deleted !!");
  const notify2 = () =>
    toast.error("There were problem with update task .Fixed soon !!");
  const deleteUser = async () => {
    const verify = confirm("Are you sure to delete the user ?");

    if (verify) {
      const { data, error } = await supabase
        .from("users")
        .delete()
        .match({ id: user.id });
      notify();
      fetchUsers();
    }
  };
  const updateUser = async () => {
    // const { data, error } = await supabase
    //   .from("messages")
    //   .update({ updateUser })
    //   .match({ id: user.id });
    // console.log(data);
    // console.log("data", data, "error", error);
    // toast.success("The user is updated successfully !!");
    // fetchUsers();
    notify2();
    handleClose();
  };
  return (
    <div className="col-lg-4 col-md-6 col-sm-16">
      <div
        className="card text-white bg-dark mb-3 mx-auto"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header" style={{ fontSize: "0.75em" }}>
          {user.firstName} {user.lastName}
        </div>
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-between">
            <span>{user.career}</span>{" "}
            <span>
              <i className="bi bi-back mx-2" onClick={handleShow}></i>
              <i className="bi bi-trash" onClick={deleteUser}></i>
            </span>
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <blockquote>member since {user.created_at.substr(0, 10)}</blockquote>
        </div>
      </div>
      <ToastContainer />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-control"
              defaultValue={user.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-control"
              id="lastName"
              defaultValue={user.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="age"
              id="age"
              name="age"
              className="form-control"
              defaultValue={user.age}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="career" className="form-label">
              Career
            </label>
            <input
              type="text"
              id="career"
              name="career"
              className="form-control"
              defaultValue={user.career}
              onChange={handleChange}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default User;
