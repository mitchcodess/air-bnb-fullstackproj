import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import "./SignUpForm.css";

function SignUpFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors({});
      return dispatch(
        sessionActions.signup({
          email,
          username,
          firstName,
          lastName,
          password,
        }),
      )
        .then(closeModal)
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            setErrors(data.errors);
          }
        });
    }
    return setErrors({
      confirmPassword:
        "Confirm Password field must be the same as the Password field",
    });
  };

  return (
    <>
      <div className="signup-form__container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-container">
            <label for="email">Email</label>
            <input
              id="email"
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {errors.email && <p>{errors.email}</p>}
          <div className="input-container">
            <label>Username</label>
            <input
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          {errors.username && <p>{errors.username}</p>}
          <div className="input-container">
            <label>First Name</label>
            <input
              placeholder="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          {errors.firstName && <p>{errors.firstName}</p>}
          <div className="input-container">
            <label for="lastname">Last Name</label>
            <input
              id="lastname"
              placeholder="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          {errors.lastName && <p>{errors.lastName}</p>}
          <div className="input-container">
            <label for="password">Password</label>
            <input
              id="password"
              placeholder="Password"
              type="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errors.password && <p>{errors.password}</p>}
          <div className="input-container">
            <label for="passwordConfirm">Confirm Password</label>
            <input
              id="paswordConfirm"
              placeholder="Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default SignUpFormModal;
