/*
  This App function is just a dummy Login page. Enter any username and password to proceed.
  
*/

import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center w-100 custom-height-1">
      <form
        className="d-block custom-width-4 p-2"
        onSubmit={(event) => {
          event.preventDefault();
          navigate("/dashboard");
        }}
      >
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="userName"
            className="form-control"
            value={username}
            required
            onChange={(e) => {
              setUsername(e.target.value);
              console.log(username, " ", password);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(username, " ", password);
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!(username !== "" && password !== "")}
        >
          <Link className="text-white text-decoration-none" to={"/dashboard"}>
            Log In
          </Link>
        </button>
      </form>
    </div>
  );
}

export default App;
