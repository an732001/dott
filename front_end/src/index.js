// tinyurl.com/hd-react

import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const CREATE_USER_ENDPOINT = "http://localhost:3000";
const MAX_INPUT_WIDTH = "150px";

const rootEl = document.getElementById("root");
const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // To persist this, look into localStorage
  const [hasSignedUp, setHasSignedUp] = useState(false);

  if (hasSignedUp) {
    return <h1>Thank u for signing up</h1>;
  }

  return (
    <form
      onSubmit={async e => {
        e.preventDefault();
        const response = await axios.post(CREATE_USER_ENDPOINT, {
          user: {
            email,
            password
          }
        });
        setHasSignedUp(true);
      }}
      style={{
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        padding: "40px",
        alignItems: "center"
      }}
    >
      <h1>Please sign up :(</h1>
      <input
        type="email"
        placeholder="me@example.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ display: "block", maxWidth: MAX_INPUT_WIDTH }}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ display: "block", maxWidth: MAX_INPUT_WIDTH }}
      />
      <button
        type="submit"
        style={{ display: "block", maxWidth: MAX_INPUT_WIDTH }}
      >
        Sign Up
      </button>
    </form>
  );
};

const render = () => ReactDOM.render(<App />, rootEl);
render();
setInterval(render, 1000);
