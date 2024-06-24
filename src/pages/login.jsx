import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Divider } from "antd";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const to = useNavigate();

  function login() {
    if ((email === "admin@gmail.com", password === "admin1234")) {
      to("/cabinet");
    } else alert("Email yoki parol notogri");
  }

  function check() {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  }

  return (
    <div className="container">
      <div className="row">
        <h2>Kirish</h2>
        <div className="line">
          <h5>Email address</h5>
          <input
            type="text"
            placeholder="Email addres"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="line">
          <h5>Password</h5>
          <div className="password">
            <input
              type={type}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={check}>
              {type === "password" ? (
                <i class="bi bi-eye"></i>
              ) : (
                <i class="bi bi-eye-slash"></i>
              )}
            </button>
          </div>
        </div>
        <button onClick={login} className="knopka">
          Log in
        </button>
        <Divider>Or</Divider>
      </div>
    </div>
  );
}
