import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginFormModal.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  };

  const setDemoUser = () => {
    setCredential('DemoUser')
    setPassword('password')

  }

  return (
    <>
      <div className="login-modal__container">
        <h1 className="login-modal__title">Welcome to Haven</h1>
        {errors.credential && <p className="error-text">{errors.credential}</p>}
        <form onSubmit={handleSubmit} className="login-form__container">
    
            <input
              className="login-modal-input"
              type="text"
              placeholder="Username or Email"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
            <input
              className="login-modal-input"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          <button className="login-modal__login-button" type="submit">
            Login
          </button>
          <button className="login-modal__login-button" type="submit" onClick={(e) => {
            setDemoUser()
          }}>
            Demo-User
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginFormModal;
