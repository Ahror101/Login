import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const to = useNavigate();

  function login() {
    if ((email === "admin@gmail.com", password === "admin1234")) {
      to("/cabinet");
    }
  }

  return (
    <div className="container">
      <div className="row">
        <h2>Kirish</h2>
        <div className="line">
          <h3>Email address</h3>
          <input
            type="text"
            placeholder="Email addres"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="line">
          <h3>Password</h3>
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={login} className="knopka">
          Log in
        </button>
      </div>
    </div>
  );
}
