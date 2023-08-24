import { useState } from "react";

export default function LoginPage({ props }) {
  const [username, setUsername] = useState(null);

  const handleChange = (e) => {
    let newValue = e.target.value;
    setUsername(newValue);
  };
  const handleSubmit = (e) => {};

  return (
    <>
      <h1>Please enter your desired username below</h1>
      <label htmlFor="username-input"></label>
      <input
        onChange={handleChange}
        name="username"
        value={username}
        placeholder="Enter a username"
        type="text"
      />
      <button onSubmit={handleSubmit}></button>
    </>
  );
}
