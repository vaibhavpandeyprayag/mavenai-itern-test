import { Link } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="d-flex justify-content-center align-items-center custom-height-1">
      <form className="w-25">
        <div class="mb-3">
          <label for="exampleInputUserName1" class="form-label">
            Username
          </label>
          <input
            type="userName"
            class="form-control"
            id="userNameInput1"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          disabled={!(username !== "" && password !== "")}
        >
          <Link className="btn btn-primary" to={"/dashboard"}>
            Log In
          </Link>
        </button>
      </form>
    </div>
  );
}

export default App;
