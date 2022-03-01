import React, { useState } from "react";
import { authenticate } from "../services/auth-service";

const initialFormState = {
  fullName: "",
  username: "",
  password: "",
  phoneNumber: "",
};

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [authForm, setAuthForm] = useState(initialFormState);

  function onFormChange(e) {
    setAuthForm({ ...authForm, [e.target.name]: e.target.value });
  }

  function handleCheckboxChange(e) {
    setIsLogin(!isLogin);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await authenticate(authForm, isLogin);
    window.location.reload();
  };

  return (
    <>
      <h1>{isLogin ? "Login" : "SignUp"}</h1>

      <input
        type="checkbox"
        checked={isLogin}
        onChange={handleCheckboxChange}
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={onFormChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={onFormChange}
        />
        {!isLogin && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              onChange={onFormChange}
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              onChange={onFormChange}
            />
          </>
        )}
        <button>{isLogin ? "Login" : "SignUp"}</button>
      </form>
    </>
  );
};

export default AuthForm;
