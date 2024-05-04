import React from "react";
import { Button } from "react-bootstrap";

export const PasswordInput = () => {
  return (
    <>
      <label>Password:</label>
      <input
        required
        className="form-control"
        type="password"
        name="password"
        placeholder="password"
      ></input>
    </>
  );
};

export const UserNameInput = () => {
  return (
    <>
      <label>Username:</label>
      <input
        required
        className="form-control"
        type="text"
        name="username"
        placeholder="username"
      ></input>
    </>
  );
};
