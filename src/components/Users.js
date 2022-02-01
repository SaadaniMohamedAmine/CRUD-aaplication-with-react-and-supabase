import React, { useEffect, useState } from "react";
import User from "./User";
import supabase from "../supabase-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error from "./Error";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    career: "",
  });

  const fetchUsers = async () => {
    const { data } = await supabase.from("users").select();
    setUsers(data);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const notify = () => toast.success("New user added !!");
  const addUser = async () => {
    await supabase.from("users").insert([user]).single();
    notify();
    fetchUsers();
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container-fluid mt-5 px-5">
      <div className="row ">
        <div className="border border-secondary p-4 col-lg-4 h-50 mb-5">
          <h2 className="text-center py-3 text-secondary">Add new user</h2>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last name:
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age :
            </label>
            <input
              type="number"
              id="age"
              name="age"
              onChange={handleChange}
              className="form-control"
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
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className=" text-center pt-2">
            <button onClick={addUser} className="btn btn-secondary">
              Add User
            </button>
            <ToastContainer />
          </div>
        </div>
        <div className="row col-lg-8 px-3">
          {users.length === 0 ? (
            <Error />
          ) : (
            users &&
            users.map((user) => (
              <User user={user} fetchUsers={fetchUsers} key={user.id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
