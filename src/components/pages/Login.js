import React, { useContext, useState } from "react";

import FromInput from "../common/FormInput";
import * as loginService from "../../services/login";

import "../../assets/css/login.css";
import { userContext } from "../App";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userData = useContext(userContext);

  const history = useHistory();

  const setIsLogged = userData.login[1];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginService.login({ email, password });
      setIsLogged(true);
      history.push("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login-container">
      <h3 className="login-header">Log In</h3>
      <form className="login-form" onSubmit={handleSubmit}>
        <FromInput label="Email" onChange={setEmail} value={email} />
        <FromInput
          label="Password"
          onChange={setPassword}
          value={password}
          type="password"
        />
        <button className="form-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
